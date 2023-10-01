import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { employeeAvailabilityValidationSchema } from 'validationSchema/employee-availabilities';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.employee_availability
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getEmployeeAvailabilityById();
    case 'PUT':
      return updateEmployeeAvailabilityById();
    case 'DELETE':
      return deleteEmployeeAvailabilityById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployeeAvailabilityById() {
    const data = await prisma.employee_availability.findFirst(
      convertQueryToPrismaUtil(req.query, 'employee_availability'),
    );
    return res.status(200).json(data);
  }

  async function updateEmployeeAvailabilityById() {
    await employeeAvailabilityValidationSchema.validate(req.body);
    const data = await prisma.employee_availability.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteEmployeeAvailabilityById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.employee_availability.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}

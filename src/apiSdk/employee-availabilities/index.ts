import queryString from 'query-string';
import { EmployeeAvailabilityInterface, EmployeeAvailabilityGetQueryInterface } from 'interfaces/employee-availability';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeAvailabilities = async (
  query?: EmployeeAvailabilityGetQueryInterface,
): Promise<PaginatedInterface<EmployeeAvailabilityInterface>> => {
  return fetcher('/api/employee-availabilities', {}, query);
};

export const createEmployeeAvailability = async (employeeAvailability: EmployeeAvailabilityInterface) => {
  return fetcher('/api/employee-availabilities', { method: 'POST', body: JSON.stringify(employeeAvailability) });
};

export const updateEmployeeAvailabilityById = async (
  id: string,
  employeeAvailability: EmployeeAvailabilityInterface,
) => {
  return fetcher(`/api/employee-availabilities/${id}`, { method: 'PUT', body: JSON.stringify(employeeAvailability) });
};

export const getEmployeeAvailabilityById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employee-availabilities/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeAvailabilityById = async (id: string) => {
  return fetcher(`/api/employee-availabilities/${id}`, { method: 'DELETE' });
};

import { AppointmentInterface } from 'interfaces/appointment';
import { EmployeeInterface } from 'interfaces/employee';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  employee?: EmployeeInterface[];
  organization?: OrganizationInterface;
  _count?: {
    appointment?: number;
    employee?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  organization_id?: string;
}

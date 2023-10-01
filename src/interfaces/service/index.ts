import { AppointmentInterface } from 'interfaces/appointment';
import { EmployeeInterface } from 'interfaces/employee';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  duration?: number;
  price?: number;
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

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}

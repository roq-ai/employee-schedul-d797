import { GetQueryInterface } from 'interfaces';

export interface EmployeeAvailabilityInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeAvailabilityGetQueryInterface extends GetQueryInterface {
  id?: string;
}

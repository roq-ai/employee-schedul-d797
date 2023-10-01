import { GetQueryInterface } from 'interfaces';

export interface EmployeeSkillsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeSkillsGetQueryInterface extends GetQueryInterface {
  id?: string;
}

import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { LocationInterface } from 'interfaces/location';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  location_id: string;
  service_id: string;
  shift_start?: any;
  shift_end?: any;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  location?: LocationInterface;
  service?: ServiceInterface;
  _count?: {
    appointment?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  location_id?: string;
  service_id?: string;
}

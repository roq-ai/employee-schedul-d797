import { GetQueryInterface } from 'interfaces';

export interface ServiceDurationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceDurationGetQueryInterface extends GetQueryInterface {
  id?: string;
}

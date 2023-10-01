import queryString from 'query-string';
import { ServiceDurationInterface, ServiceDurationGetQueryInterface } from 'interfaces/service-duration';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceDurations = async (
  query?: ServiceDurationGetQueryInterface,
): Promise<PaginatedInterface<ServiceDurationInterface>> => {
  return fetcher('/api/service-durations', {}, query);
};

export const createServiceDuration = async (serviceDuration: ServiceDurationInterface) => {
  return fetcher('/api/service-durations', { method: 'POST', body: JSON.stringify(serviceDuration) });
};

export const updateServiceDurationById = async (id: string, serviceDuration: ServiceDurationInterface) => {
  return fetcher(`/api/service-durations/${id}`, { method: 'PUT', body: JSON.stringify(serviceDuration) });
};

export const getServiceDurationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-durations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceDurationById = async (id: string) => {
  return fetcher(`/api/service-durations/${id}`, { method: 'DELETE' });
};

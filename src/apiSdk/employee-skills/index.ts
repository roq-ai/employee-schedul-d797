import queryString from 'query-string';
import { EmployeeSkillsInterface, EmployeeSkillsGetQueryInterface } from 'interfaces/employee-skills';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeSkills = async (
  query?: EmployeeSkillsGetQueryInterface,
): Promise<PaginatedInterface<EmployeeSkillsInterface>> => {
  return fetcher('/api/employee-skills', {}, query);
};

export const createEmployeeSkills = async (employeeSkills: EmployeeSkillsInterface) => {
  return fetcher('/api/employee-skills', { method: 'POST', body: JSON.stringify(employeeSkills) });
};

export const updateEmployeeSkillsById = async (id: string, employeeSkills: EmployeeSkillsInterface) => {
  return fetcher(`/api/employee-skills/${id}`, { method: 'PUT', body: JSON.stringify(employeeSkills) });
};

export const getEmployeeSkillsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employee-skills/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeSkillsById = async (id: string) => {
  return fetcher(`/api/employee-skills/${id}`, { method: 'DELETE' });
};

const mapping: Record<string, string> = {
  appointments: 'appointment',
  employees: 'employee',
  'employee-availabilities': 'employee_availability',
  'employee-skills': 'employee_skills',
  locations: 'location',
  organizations: 'organization',
  services: 'service',
  'service-durations': 'service_duration',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

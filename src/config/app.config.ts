interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Manager', 'HR Administrator', 'Employee', 'Customer'],
  tenantName: 'Organization',
  applicationName: 'Employee Scheduling v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View service details',
    'View employee details',
    'View organization details',
    'View appointment details',
  ],
  ownerAbilities: ['Manage organization', 'Manage services', 'Manage employees', 'Manage appointments'],
  getQuoteUrl: 'https://app.roq.ai/proposal/758dd6e1-34fd-4744-b1c6-7f631e4ed286',
};

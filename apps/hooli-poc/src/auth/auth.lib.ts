export const roles = {
  HooliAPI: { name: 'HooliAPI' },
  HooliCP: { name: 'HooliCP' },
  HooliMP: { name: 'HooliMP' },
};

export const groups = {
  Customer: {
    name: 'Customer',
    roles: [roles.HooliCP.name],
  },
  MerchantOwner: {
    name: 'Merchant Owner',
    roles: [roles.HooliAPI.name, roles.HooliMP.name],
  },
  MerchantStaff: {
    name: 'Merchant Staff',
    roles: [roles.HooliMP.name],
  },
  Application: {
    name: 'Application',
    roles: [roles.HooliAPI.name],
  },
  Agent: {
    name: 'Agent',
    roles: [roles.HooliMP.name],
  },
};

export const groupNamesArr = [];

for (const key in groups) {
  const element = groups[key];
  groupNamesArr.push(element.name);
}

export const buildGroupPayload = (
  applicationRoles: { name?: string; id?: string }[],
) => {
  const groupsPayload = [];
  for (const key in groups) {
    const group = groups[key];
    const roleIds = [];
    group.roles.forEach((gr) => {
      const ar = applicationRoles.find(({ name }) => name == gr);
      roleIds.push(ar.id);
    });
    groupsPayload.push({
      group: { name: group.name },
      roleIds,
    });
  }
  return groupsPayload;
};

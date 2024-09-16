export const schema = (userRoles) => ({
  // required: ['role_id'],
  type: 'object',
  properties: {
    role_id: {
      type: 'string',
      title: 'role',
      // oneOf: userRoles,
    },
  },
  allOf: [
    // {
    //   if: {
    //     properties: {
    //       role_id: {},
    //     },
    //   },
    //   then: {
    //     not: {
    //       properties: {
    //         workshop_id: {},
    //         site_id: {},
    //       },
    //     },
    //   },
    // },
    {
      if: {
        properties: {
          role_id: {
            oneOf: [{ const: '3' }, { const: '4' }, { const: '5' }, { const: '6' }, { const: '7' }, { const: '8' }],
          },
        },
      },
      then: {
        required: ['workshop_id'],
        properties: {
          workshop_id: {
            type: 'string',
            title: 'workshop',
          },
        },
      },
    },
    {
      if: {
        properties: {
          role_id: {
            const: '9',
          },
        },
      },
      then: {
        required: ['site_id'],
        properties: {
          site_id: {
            type: 'string',
            title: 'site',
          },
        },
      },
    },
    {
      required: ['role_id'],
    },
  ],
});

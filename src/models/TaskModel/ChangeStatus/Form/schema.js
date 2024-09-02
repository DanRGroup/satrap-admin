const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    status_id: {
      type: 'string',
      title: 'task_status',
      // oneOf: taskStatusesRole,
    },
    // location: {
    //   type: 'object',
    //   title: 'location',
    //   properties: {
    //     lat: {
    //       type: 'string',
    //     },
    //     lng: {
    //       type: 'string',
    //     },
    //   },
    // },
  },
});

export default schema;

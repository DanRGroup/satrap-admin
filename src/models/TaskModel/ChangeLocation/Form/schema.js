const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    location: {
      type: 'object',
      title: 'location',
      properties: {
        lat: {
          type: 'string',
        },
        lng: {
          type: 'string',
        },
      },
    },
  },
});

export default schema;

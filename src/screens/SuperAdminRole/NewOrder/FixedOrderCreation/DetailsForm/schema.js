const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    implantType: {
      type: 'string',
      title: 'Implant Type',
    },
    diameter: {
      type: 'string',
      title: 'Diameter',
    },
    cuffColar: {
      type: 'string',
      title: 'Cuff Colar',
    },
    abutmentDiameter: {
      type: 'string',
      title: 'Abutment Diameter',
    },
    abutmentHeight: {
      type: 'string',
      title: 'Abutment Height',
    },
    abutmentAngel: {
      type: 'string',
      title: 'Abutment Angel',
    },
    date: {
      type: 'string',
      title: 'date',
      format: 'date',
    },
    description: {
      type: 'string',
      title: 'description',
    },
  },
});

export default schema;

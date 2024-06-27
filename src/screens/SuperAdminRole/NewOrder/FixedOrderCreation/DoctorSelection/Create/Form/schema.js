const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    firstname: {
      type: 'string',
      title: 'firstname',
    },
    lastname: {
      type: 'string',
      title: 'lastname',
    },
    national_code: {
      type: 'string',
      title: 'nationalCode',
    },
    cellphone: {
      type: 'string',
      title: 'cellphone',
      minLength: 9,
    },
    medical_number: {
      type: 'string',
      title: 'medicalNumber',
    },
    specialist: {
      type: 'string',
      title: 'specialist',
      oneOf: [
        { const: 'orthodontist', title: 'orthodontist' },
        { const: 'anesthesiologist', title: 'anesthesiologist' },
        { const: 'hematologist', title: 'hematologist' },
        { const: 'plastic_surgeon', title: 'plastic surgeon' },
      ],
    },
    gender: {
      type: 'number',
      title: 'gender',
      oneOf: [
        { const: 1, title: 'man' },
        { const: 0, title: 'woman' },
      ],
    },
    address: {
      type: 'string',
      title: 'address',
    },
    email: {
      type: 'string',
      title: 'email',
      format: 'email',
    }
  },
});

export default schema;

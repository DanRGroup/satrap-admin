const uiSchema = () => ({
  firstname: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  lastname: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  national_code: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  cellphone: {
    inputType: 'tel',
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  address: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 3,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  gender: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  medical_number: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  specialist: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  }
});

export default uiSchema;

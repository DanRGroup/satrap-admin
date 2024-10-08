// import { UsersTypeSelectionWidget, UsersStatusSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': [
    'cellphone',
    'password',
    'firstname',
    'lastname',
    'email',
    'username',
    'birth_date',
    'national_code',
    'status_id',
    'is_active',
    'need_activation',
    '*',
  ],
  type_id: {
    // 'ui:widget': UsersTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
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
  username: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  password: {
    'ui:placeholder': '********',
    'ui:widget': 'password',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  cellphone: {
    'ui:autofocus': true,
    'ui:placeholder': '---------09',
    inputType: 'tel',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  birth_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  national_code: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  status_id: {
    // 'ui:widget': UsersStatusSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  email: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  address: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 2,
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8,
      xl: 8,
    },
  },
  gender: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  is_active: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  need_activation: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
});

export default uiSchema;

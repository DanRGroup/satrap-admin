import { UsersRoleSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['cellphones', 'lastname', 'firstname', '*'],
  lastname: {
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  firstname: {
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  cellphones: {
    'ui:placeholder': '---------09',
    inputType: 'tel',
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  role_id: {
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  type_ids: {
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  status_ids: {
    'ui:options': {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
});

export default uiSchema;

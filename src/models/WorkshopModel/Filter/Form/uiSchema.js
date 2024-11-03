import { UsersSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  title: {
    'ui:options': {
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
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  status_ids: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  manager_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
});

export default uiSchema;

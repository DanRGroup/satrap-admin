import { UsersRolesSelectionWidget, WorkshopSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  workshop_id: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  role_id: {
    'ui:widget': UsersRolesSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
});

export default uiSchema;

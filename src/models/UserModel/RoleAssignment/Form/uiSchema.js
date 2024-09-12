import { UsersRoleSelectionWidget, WorkshopSelectionWidget, SiteSelectionWidget } from 'components/FormWidgets';
import {} from 'components/FormWidgets';

const uiSchema = () => ({
  role_id: {
    'ui:widget': UsersRoleSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
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
  site_id: {
    'ui:widget': SiteSelectionWidget,
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

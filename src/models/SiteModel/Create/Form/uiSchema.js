import { UsersSelectionWidget, SiteTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['title', 'type_id', 'manager_id', 'is_active', 'location'],
  title: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  manager_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  type_id: {
    // 'ui:widget': SiteTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  location: {
    'ui:field': 'location',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  is_active: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
});

export default uiSchema;

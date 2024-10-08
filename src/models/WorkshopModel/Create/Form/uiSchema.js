import { UsersSelectionWidget, SiteTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['title', 'status_id', 'manager_id', 'is_active', 'location'],
  title: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  alias: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  // shipping_cost_config: {
  //   'ui:widget': SiteTypeSelectionWidget,
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  status_id: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  manager_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
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
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
});

export default uiSchema;

import { UsersSelectionWidget, SiteTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  title: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  alias: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
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
  manager_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
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
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
});

export default uiSchema;

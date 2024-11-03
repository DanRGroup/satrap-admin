import { UsersSelectionWidget, VehicleTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  plaque: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  serial_number: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  owner_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  driver_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  status_ids: {
    'ui:emptyValue': '',
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  type_ids: {
    'ui:emptyValue': '',
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
});

export default uiSchema;

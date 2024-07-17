import { UsersSelectionWidget, VehicleTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  plaque: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  serial_number: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  owner_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  driver_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  status: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  type_ids: {
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

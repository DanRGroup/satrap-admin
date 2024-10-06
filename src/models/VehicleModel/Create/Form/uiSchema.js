import { UsersSelectionWidget, VehicleTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['plaque', '*'],
  owner_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  driver_id: {
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
    // 'ui:widget': VehicleTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  status: {
    // 'ui:widget': VehicleTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // serial_number: {
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  plaque: {
    'ui:field': 'licensePlate',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  details: {
    'ui:widget': 'textarea',
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

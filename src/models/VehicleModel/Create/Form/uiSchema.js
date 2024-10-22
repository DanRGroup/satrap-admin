import { CompanySelectionWidget, UsersSelectionWidget, VehicleTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['plaque', 'owner_type_id', 'owner_id', 'natural_owner_id', 'legal_owner_id', '*'],
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
  owner_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  owner_type_id: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  natural_owner_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  legal_owner_id: {
    'ui:widget': CompanySelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  driver_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
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

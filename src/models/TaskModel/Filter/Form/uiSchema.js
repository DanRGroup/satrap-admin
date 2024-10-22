import {
  UsersSelectionWidget,
  SiteSelectionWidget,
  VehicleSelectionWidget,
  TasksTypeSelectionWidget,
  TasksStatusSelectionWidget,
  OperationTypeSelectionWidget,
  WorkshopSelectionWidget,
  MaterialTypeSelectionWidget,
  ShiftTypeSelectionWidget,
  TariffSelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': [
    'vehicle_ids',
    'site_ids',
    'workshop_ids',
    'driver_ids',
    'status_ids',
    'type_ids',
    'material_type_ids',
    'shift_type_ids',
    'tariff',
    '*',
  ],
  vehicle_ids: {
    'ui:widget': VehicleSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  workshop_ids: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  site_ids: {
    'ui:widget': SiteSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  driver_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  type_ids: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  material_type_ids: {
    'ui:widget': MaterialTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  shift_type_ids: {
    'ui:widget': ShiftTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  operation_type_ids: {
    'ui:widget': OperationTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  status_ids: {
    // 'ui:widget': TasksStatusSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },

  min_created_at: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  max_created_at: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  match_location: {
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

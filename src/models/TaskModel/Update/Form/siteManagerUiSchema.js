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
} from 'components/FormWidgets';

const uiSchema = () => ({
  vehicle_id: {
    'ui:widget': VehicleSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  type_id: {
    // 'ui:widget': TasksTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  operation_type_id: {
    // 'ui:widget': OperationTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  workshop_id: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:widget': 'hidden',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  site_id: {
    'ui:widget': SiteSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  material_type_id: {
    // 'ui:widget': MaterialTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  shift_type_id: {
    // 'ui:widget': ShiftTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  status_id: {
    // 'ui:widget': TasksStatusSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  start_time: {
    'ui:widget': 'hidden',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_time: {
    'ui:widget': 'hidden',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  start_date: {
    'ui:widget': 'hidden',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_date: {
    'ui:widget': 'hidden',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  cost: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  bill_number: {
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  baskul: {
    'ui:options': {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  tonnage: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  coefficient: {
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  description: {
    'ui:disabled': true,
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

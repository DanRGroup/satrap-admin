import {
  UsersSelectionWidget,
  SiteSelectionWidget,
  TasksTypeSelectionWidget,
  OperationTypeSelectionWidget,
  WorkshopSelectionWidget,
  MaterialTypeSelectionWidget,
  ShiftTypeSelectionWidget,
  ContractSelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  task_type_ids: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  operation_type_ids: {
    'ui:widget': OperationTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  material_type_ids: {
    'ui:widget': MaterialTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  shift_type_ids: {
    'ui:widget': ShiftTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  workshop_ids: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  site_ids: {
    'ui:widget': SiteSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  contract_ids: {
    'ui:widget': ContractSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
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

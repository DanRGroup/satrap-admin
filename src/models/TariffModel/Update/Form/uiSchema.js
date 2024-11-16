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
  task_type_id: {
    'ui:widget': TasksTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  operation_type_id: {
    'ui:widget': OperationTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  material_type_id: {
    'ui:widget': MaterialTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  shift_type_id: {
    'ui:widget': ShiftTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  workshop_id: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  site_id: {
    'ui:widget': SiteSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  // creator_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  // updator_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  contract_id: {
    'ui:widget': ContractSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  cost: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  is_active: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  description: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 2,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
});

export default uiSchema;

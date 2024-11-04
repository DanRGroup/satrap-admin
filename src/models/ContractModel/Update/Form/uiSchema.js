import {
  ContractTypeSelectionWidget,
  UsersSelectionWidget,
  WorkshopSelectionWidget,
  OperationTypeSelectionWidget,
  ContractCategorySelectionWidget,
  CompanySelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': [
    'title',
    'forecast_amount',
    'cost',
    'status',
    'type_id',
    'employer_id',
    'company_id',
    'category_id',
    'operation_type_id',
    'workshop_id',
    'is_civil',
    '*',
  ],
  title: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  forecast_amount: {
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
  status: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  type_id: {
    // 'ui:widget': ContractTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  category_id: {
    'ui:widget': ContractCategorySelectionWidget,
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
  employer_type: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  employer_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  company_id: {
    'ui:widget': CompanySelectionWidget,
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

  contractual_number: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  is_civil: {
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
  start_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  number: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  details: {
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

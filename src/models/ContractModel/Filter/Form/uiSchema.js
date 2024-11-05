import {
  ContractTypeSelectionWidget,
  WorkshopSelectionWidget,
  UsersSelectionWidget,
  CompanySelectionWidget,
  ContractCategorySelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': [
    'title',
    'category_ids',
    'workshop_ids',
    'type_ids',
    'employer_ids',
    'company_ids',
    'status',
    'number',
    '*',
  ],
  title: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  start_date: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  end_date: {
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
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  type_ids: {
    // 'ui:widget': ContractTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  employer_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2,
      xl: 2,
    },
  },
  company_ids: {
    'ui:widget': CompanySelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2,
      xl: 2,
    },
  },
  status: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2,
      xl: 2,
    },
  },
  number: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  category_ids: {
    'ui:widget': ContractCategorySelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
});

export default uiSchema;

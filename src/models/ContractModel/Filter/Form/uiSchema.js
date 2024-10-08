import {
  ContractTypeSelectionWidget,
  WorkshopSelectionWidget,
  UsersSelectionWidget,
  CompanySelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['title', 'type_ids', 'employer_ids', 'company_ids', 'workshop_ids', 'status', 'number', '*'],
  title: {
    'ui:options': {
      xs: 6,
      sm: 6,
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
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  type_ids: {
    // 'ui:widget': ContractTypeSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  employer_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  company_ids: {
    'ui:widget': CompanySelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  status: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 3,
      lg: 3,
      xl: 3,
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
});

export default uiSchema;

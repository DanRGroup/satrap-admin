import { ContractCategorySelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  parent_id: {
    'ui:widget': ContractCategorySelectionWidget,
  },
  is_active: {
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
  details: {
    selected: {
      'ui:widget': 'radio',
      'ui:options': {
        inline: true,
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6,
      },
    },
    in_first_page: {
      'ui:widget': 'radio',
      'ui:options': {
        inline: true,
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6,
      },
    },
  },
});

export default uiSchema;

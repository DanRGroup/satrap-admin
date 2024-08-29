// import { ShopSelectionWidget } from 'components/FormWidget';

const uiSchema = () => ({
  shop_id: {
    // 'ui:widget': ShopSelectionWidget,
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

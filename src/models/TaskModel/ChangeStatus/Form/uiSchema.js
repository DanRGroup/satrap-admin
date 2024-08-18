import { TasksStatusSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  status_id: {
    'ui:widget': TasksStatusSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  location: {
    'ui:field': 'location',
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

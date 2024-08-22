import { TasksStatusSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  status_id: {
    'ui:widget': TasksStatusSelectionWidget,
    // 'ui:options': {
    //   initFilter: {
    //     for_admin: 1,
    //   }
    // },
  },
  location: {
    'ui:field': 'location',
  },
});

export default uiSchema;

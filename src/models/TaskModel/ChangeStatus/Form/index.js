import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const Form = ({ formData = {}, onChange }) => {
  // const { taskStatuses, limitedTaskStatuses, supervisorTaskStatuses } = useSelector((state) => state.models);
  // const { userInfo } = useSelector((state) => state.auth);
  // const userRole = userInfo?.roles[0].name;

  // let taskStatusesRole;
  // switch (userRole) {
  //   case 'siteManager':
  //   case 'driver':
  //   case 'owner':
  //     taskStatusesRole = limitedTaskStatuses;
  //     break;
  //   case 'workshopSupervisor':
  //     taskStatusesRole = supervisorTaskStatuses;
  //     break;
  //   default:
  //     taskStatusesRole = taskStatuses;
  // }

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema()}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import siteManagerUiSchema from './siteManagerUiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';
import { ConstantColorFactor } from 'three';

const Form = ({ formData = {}, onChange }) => {
  const { taskStatuses, limitedTaskStatuses, supervisorTaskStatuses } = useSelector((state) => state.models);
  const { userInfo } = useSelector((state) => state.auth);
  const userRole = userInfo?.roles[0].name;

  let taskStatusesRole;
  switch (userRole) {
    case 'siteManager':
    case 'driver':
    case 'owner':
      taskStatusesRole = limitedTaskStatuses;
      break;
    case 'workshopSupervisor':
      taskStatusesRole = supervisorTaskStatuses;
      break;
    default:
      taskStatusesRole = taskStatuses;
  }

  const formSchema = hasRequiredRole(['siteManager'], userRole) ? siteManagerUiSchema() : uiSchema();

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema((taskStatuses = taskStatusesRole))}
      uiSchema={formSchema}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

import React from 'react';
import { schema, siteSchema, workshopSchema } from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const RoleAssignmentForm = ({ formData = {}, loading, onSubmit, onChange }) => {
  const { userRoles } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(userRoles)}
      uiSchema={uiSchema()}
      loading={loading}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
      liveValidate={false}
    />
  );
};

export default RoleAssignmentForm;

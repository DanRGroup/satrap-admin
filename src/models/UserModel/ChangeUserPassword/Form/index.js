import React from 'react';
import { schema, siteSchema, workshopSchema } from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';

const RoleAssignmentForm = ({ formData = {}, loading, onSubmit, onChange }) => {
  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema()}
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

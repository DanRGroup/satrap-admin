import React from 'react';
import { schema, siteSchema, workshopSchema } from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const RoleAssignmentForm = ({ formData = {}, loading, onSubmit, onChange, formSchema }) => {
  const { userRoles } = useSelector((state) => state.models);

  const getSchema = (formSchema) => {
    if (formSchema === 1) {
      return workshopSchema(userRoles);
    } else if (formSchema === 2) {
      return siteSchema(userRoles);
    } else {
      return schema(userRoles);
    }
  };
  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={getSchema(formSchema)}
      uiSchema={uiSchema()}
      loading={loading}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default RoleAssignmentForm;

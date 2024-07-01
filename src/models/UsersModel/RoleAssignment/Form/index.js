import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const RoleAssignmentForm = ({ formData = {}, loading, onSubmit }) => {
  // const {shops, roles} = useSelector(state => state.app);
  return (
    <MuiFormBuilder
      submit="تایید"
      schema={schema([], [])}
      uiSchema={uiSchema()}
      loading={loading}
      formData={formData}
      onSubmit={onSubmit}
    />
  );
};

export default RoleAssignmentForm;

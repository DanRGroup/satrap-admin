import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';

const Form = ({ formData = {}, onChange }) => {
  const handleChange = ({ formData: newData }) => {
    onChange({ formData: { ...formData, ...newData }, next: false });
  };
  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema()}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={handleChange}
    />
  );
};

export default Form;

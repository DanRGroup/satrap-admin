import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';

const Form = ({ formData = {}, onChange }) => {
  const handleChange = ({ formData }) => {
    onChange({ formData: { extra: formData }, next: false });
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

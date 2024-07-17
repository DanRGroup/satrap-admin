import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const Form = ({ formData = {}, onChange }) => {
  const { workshopStatuses } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(workshopStatuses)}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

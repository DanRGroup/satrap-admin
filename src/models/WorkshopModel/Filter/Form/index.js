import React from 'react';
import { MuiFormBuilder } from 'components';

import uiSchema from './uiSchema';
import schema from './schema';
import { useSelector } from 'react-redux';

const Form = ({ init, setFilter }) => {
  const formData = { ...init };

  const onChange = async ({ formData }) => {
    setFilter(formData);
  };

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

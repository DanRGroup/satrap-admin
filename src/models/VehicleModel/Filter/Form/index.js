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

  const { vehicleTypes } = useSelector((state) => state.models);
  const { vehicleStatuses } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(vehicleTypes, vehicleStatuses)}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

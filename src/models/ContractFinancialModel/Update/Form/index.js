import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const Form = ({ formData = {}, onChange }) => {
  const { contractTypes } = useSelector((state) => state.models);
  const { contractStatuses } = useSelector((state) => state.models);
  // const { operationTypes } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(contractTypes, contractStatuses)}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

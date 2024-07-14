import React from 'react';
import schema from './schema';
import uiSchema from './uiSchema';
import { MuiFormBuilder } from 'components';
import { useSelector } from 'react-redux';

const Form = ({ formData = {}, onChange }) => {
  const { taskTypes } = useSelector((state) => state.models);
  const { operationTypes } = useSelector((state) => state.models);
  const { materialTypes } = useSelector((state) => state.models);
  const { shiftTypes } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(taskTypes, operationTypes, materialTypes, shiftTypes)}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

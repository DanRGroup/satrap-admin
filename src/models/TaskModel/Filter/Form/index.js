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

  const { taskTypes } = useSelector((state) => state.models);
  // const { operationTypes } = useSelector((state) => state.models);
  // const { materialTypes } = useSelector((state) => state.models);
  // const { shiftTypes } = useSelector((state) => state.models);
  const { taskStatuses } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema({ taskTypes, taskStatuses })}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

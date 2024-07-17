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

  const { siteTypes } = useSelector((state) => state.models);
  const { siteStatuses } = useSelector((state) => state.models);

  return (
    <MuiFormBuilder
      showSubmit={false}
      schema={schema(siteTypes, siteStatuses)}
      uiSchema={uiSchema()}
      formData={formData}
      onChange={onChange}
    />
  );
};

export default Form;

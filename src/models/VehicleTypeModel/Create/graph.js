import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createVehicleTypes',
    serviceName: 'admin',
    query: gql`
      mutation createVehicleTypes($title: String!, $details: String) {
        createVehicleTypes(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

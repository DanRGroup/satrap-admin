import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createVehicleType',
    serviceName: 'admin',
    query: gql`
      mutation createVehicleType($title: String!, $details: String) {
        createVehicleType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

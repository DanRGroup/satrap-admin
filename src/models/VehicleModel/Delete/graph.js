import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteVehicle',
    serviceName: 'admin',
    query: gql`
      mutation deleteVehicle($ids: [String]!) {
        deleteVehicle(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

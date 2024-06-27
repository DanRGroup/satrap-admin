import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteVehicleTypes',
    serviceName: 'admin',
    query: gql`
      mutation deleteVehicleTypes($ids: [String]!) {
        deleteVehicleTypes(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

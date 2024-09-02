import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteVehicleType',
    serviceName: 'admin',
    query: gql`
      mutation deleteVehicleType($ids: [String]!) {
        deleteVehicleType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

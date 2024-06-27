import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteMaterialType',
    serviceName: 'admin',
    query: gql`
      mutation deleteMaterialType($ids: [String]!) {
        deleteMaterialType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

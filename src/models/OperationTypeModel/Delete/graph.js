import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteOperationType',
    serviceName: 'admin',
    query: gql`
      mutation deleteOperationType($ids: [String]!) {
        deleteOperationType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

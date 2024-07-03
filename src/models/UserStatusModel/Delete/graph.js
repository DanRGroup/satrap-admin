import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteUserStatus',
    serviceName: 'admin',
    query: gql`
      mutation deleteUserStatus($ids: [String]!) {
        deleteUserStatus(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

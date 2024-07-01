import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteShopsUser',
    serviceName: 'shopadmin',
    query: gql`
      mutation deleteShopsUser($ids: [String]!) {
        deleteShopsUser(ids: $ids) {
          influenced_count
          messages
        }
      }
    `,
  },
};

export default schema;

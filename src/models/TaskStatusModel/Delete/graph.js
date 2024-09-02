import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteTaskStatus',
    serviceName: 'admin',
    query: gql`
      mutation deleteTaskStatus($ids: [String]!) {
        deleteTaskStatus(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

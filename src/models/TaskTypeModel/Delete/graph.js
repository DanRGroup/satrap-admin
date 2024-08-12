import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteTaskType',
    serviceName: 'admin',
    query: gql`
      mutation deleteTaskType($ids: [String]!) {
        deleteTaskType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

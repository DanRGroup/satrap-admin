import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'updateTask',
    serviceName: 'auth',
    query: gql`
      mutation updateTask($ids: [String]!, $status_id: String) {
        updateTask(ids: $ids, status_id: $status_id) {
          messages
        }
      }
    `,
  },
};

export default schema;

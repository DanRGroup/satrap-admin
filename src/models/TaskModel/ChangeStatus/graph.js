import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          records {
            data {
              id
              status {
                id
                title
              }
            }
          }
        }
      }
    `,
  },
  update: {
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

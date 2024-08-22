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
              status {
                id
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
      mutation updateTask($ids: [String]!, $status_id: String, $lat: String, $lng: String) {
        updateTask(ids: $ids, status_id: $status_id, lat: $lat, lng: $lng) {
          messages
        }
      }
    `,
  },
};

export default schema;

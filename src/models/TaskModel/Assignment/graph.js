import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'grapghql',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          data {
            id
            title
            media {
              full_url
            }
            producer {
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

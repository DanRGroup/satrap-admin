import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          data {
            media {
              full_url
            }
            type {
              id
              title
            }
            workshop {
              id
              title
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;

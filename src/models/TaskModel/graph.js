import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String], $title: String) {
        task(ids: $ids, title: $title) {
          data {
            id
            title
            media {
              id
              full_url
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;

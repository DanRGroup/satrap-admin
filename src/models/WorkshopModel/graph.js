import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshop',
    serviceName: 'auth',
    query: gql`
      query workshop($ids: [String], $title: String) {
        workshop(ids: $ids, title: $title) {
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

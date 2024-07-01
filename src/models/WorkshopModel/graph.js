import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop($ids: [String], $title: String, $for_admin: Int) {
        workshop(ids: $ids, title: $title, for_admin: $for_admin) {
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

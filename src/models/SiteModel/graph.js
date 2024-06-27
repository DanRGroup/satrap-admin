import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query site($ids: [String], $title: String) {
        site(ids: $ids, title: $title) {
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

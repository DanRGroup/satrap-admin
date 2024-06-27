import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String], $title: String) {
        siteType(ids: $ids, title: $title) {
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

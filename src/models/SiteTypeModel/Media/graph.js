import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String]) {
        siteType(ids: $ids) {
          data {
            media {
              id
              name
              full_url
              size
              collection_name
            }
          }
        }
      }
    `,
  },
};

export default schema;

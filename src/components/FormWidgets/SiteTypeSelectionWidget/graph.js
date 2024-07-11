import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String]) {
        siteType(ids: $ids) {
          data {
            id
            title
            media {
              id
              full_url
            }
          }
        }
      }
    `,
  },
};

export default schema;

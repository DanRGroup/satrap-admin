import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'siteReport',
    serviceName: 'graphql',
    query: gql`
      query siteReport($ids: [String]) {
        siteReport(ids: $ids) {
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

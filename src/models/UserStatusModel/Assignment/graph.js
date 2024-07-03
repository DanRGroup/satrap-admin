import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'siteType',
    serviceName: 'grapghql',
    query: gql`
      query siteType($ids: [String]) {
        siteType(ids: $ids) {
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

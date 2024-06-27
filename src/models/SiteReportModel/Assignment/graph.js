import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'siteReport',
    serviceName: 'grapghql',
    query: gql`
      query siteReport($ids: [String]) {
        siteReport(ids: $ids) {
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

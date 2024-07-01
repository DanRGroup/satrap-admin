import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'tariff',
    serviceName: 'grapghql',
    query: gql`
      query tariff($ids: [String]) {
        tariff(ids: $ids) {
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

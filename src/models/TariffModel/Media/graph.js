import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff($ids: [String]) {
        tariff(ids: $ids) {
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

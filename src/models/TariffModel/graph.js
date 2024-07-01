import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff($ids: [String]) {
        tariff(ids: $ids) {
          data {
            id
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

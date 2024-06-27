import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff($ids: [String], $title: String) {
        tariff(ids: $ids, title: $title) {
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

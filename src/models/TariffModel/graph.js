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
            task_type {
              id
              title
            }
            workshop {
              id
              title
            }
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

import { gql } from '@apollo/client';

const schema = {
  get: {
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
            material_type {
              id
              title
            }
            workshop {
              id
              title
            }
            site {
              id
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

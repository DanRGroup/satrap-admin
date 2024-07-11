import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          records {
            id
            media {
              full_url
            }
            type {
              id
              title
            }
            workshop {
              id
              title
            }
          }
          #total
          total_houre
          total_service
          total_shift
          total_tonnage
          total_cost
        }
      }
    `,
  },
};

export default schema;

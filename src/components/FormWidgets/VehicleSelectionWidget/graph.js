import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle($ids: [String]) {
        vehicle(ids: $ids) {
          data {
            id
            serial_number
            plaque
            media {
              id
              full_url
            }
          }
        }
      }
    `,
  },
};

export default schema;

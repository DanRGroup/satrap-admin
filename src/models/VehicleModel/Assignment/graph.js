import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicle',
    serviceName: 'grapghql',
    query: gql`
      query vehicle($ids: [String]) {
        vehicle(ids: $ids) {
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

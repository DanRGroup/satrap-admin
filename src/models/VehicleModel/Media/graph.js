import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle($ids: [String]) {
        vehicle(ids: $ids) {
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

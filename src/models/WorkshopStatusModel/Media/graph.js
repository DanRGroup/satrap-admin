import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'workshopStatus',
    serviceName: 'graphql',
    query: gql`
      query workshopStatus($ids: [String]) {
        workshopStatus(ids: $ids) {
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

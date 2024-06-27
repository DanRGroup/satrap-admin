import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshopStatus',
    serviceName: 'grapghql',
    query: gql`
      query workshopStatus($ids: [String]) {
        workshopStatus(ids: $ids) {
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

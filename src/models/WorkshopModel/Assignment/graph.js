import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshop',
    serviceName: 'grapghql',
    query: gql`
      query workshop($ids: [String]) {
        workshop(ids: $ids) {
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

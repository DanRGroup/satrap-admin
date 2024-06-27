import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'materialType',
    serviceName: 'grapghql',
    query: gql`
      query materialType($ids: [String]) {
        materialType(ids: $ids) {
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

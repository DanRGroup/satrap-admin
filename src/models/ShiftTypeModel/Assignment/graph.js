import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'shiftType',
    serviceName: 'grapghql',
    query: gql`
      query shiftType($ids: [String]) {
        shiftType(ids: $ids) {
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

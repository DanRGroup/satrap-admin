import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'shiftType',
    serviceName: 'graphql',
    query: gql`
      query shiftType($ids: [String]) {
        shiftType(ids: $ids) {
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

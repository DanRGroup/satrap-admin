import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'shiftType',
    serviceName: 'graphql',
    query: gql`
      query shiftType($ids: [String]) {
        shiftType(ids: $ids) {
          data {
            id
            title
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

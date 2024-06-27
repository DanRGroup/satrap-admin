import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'shiftType',
    serviceName: 'graphql',
    query: gql`
      query shiftType($ids: [String], $title: String) {
        shiftType(ids: $ids, title: $title) {
          data {
            id
            title
            media {
              id
              full_url
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  get: {
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
  update: {
    name: 'updateShiftType',
    serviceName: 'admin',
    query: gql`
      mutation updateShiftType($ids: [String]!, $title: String!, $details: String) {
        updateShiftType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

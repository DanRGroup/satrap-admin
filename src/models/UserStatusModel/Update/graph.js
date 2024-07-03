import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'userStatus',
    serviceName: 'auth',
    query: gql`
      query userStatus($ids: [String], $title: String) {
        userStatus(ids: $ids, title: $title) {
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
    name: 'updateUserStatus',
    serviceName: 'admin',
    query: gql`
      mutation updateUserStatus($ids: [String]!, $title: String!, $details: String) {
        updateUserStatus(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

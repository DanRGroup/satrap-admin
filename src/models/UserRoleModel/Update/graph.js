import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'userType',
    serviceName: 'workshopadmin',
    query: gql`
      query userType($ids: [String]) {
        userType(ids: $ids) {
          data {
            id
            title
          }
          total
        }
      }
    `,
  },
  update: {
    name: 'updateUserType',
    serviceName: 'admin',
    query: gql`
      mutation updateUserType($ids: [String]!, $title: String!, $details: String) {
        updateUserType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

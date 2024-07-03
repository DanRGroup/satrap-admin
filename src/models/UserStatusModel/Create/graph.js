import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createUserStatus',
    serviceName: 'admin',
    query: gql`
      mutation createUserStatus($title: String!, $details: String) {
        createUserStatus(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

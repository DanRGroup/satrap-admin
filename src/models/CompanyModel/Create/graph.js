import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createCompany',
    serviceName: 'admin',
    query: gql`
      mutation createCompany($title: String!, $details: String) {
        createCompany(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

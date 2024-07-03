import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createContractType',
    serviceName: 'admin',
    query: gql`
      mutation createContractType($title: String!, $details: String) {
        createContractType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

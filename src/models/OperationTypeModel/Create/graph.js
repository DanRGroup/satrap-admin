import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createOperationType',
    serviceName: 'admin',
    query: gql`
      mutation createOperationType($title: String!, $details: String) {
        createOperationType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

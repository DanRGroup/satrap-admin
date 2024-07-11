import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createTaskStatus',
    serviceName: 'admin',
    query: gql`
      mutation createTaskStatus($title: String!, $details: String) {
        createTaskStatus(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

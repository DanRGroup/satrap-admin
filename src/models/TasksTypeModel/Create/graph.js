import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createTaskType',
    serviceName: 'admin',
    query: gql`
      mutation createTaskType($title: String!, $details: String) {
        createTaskType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

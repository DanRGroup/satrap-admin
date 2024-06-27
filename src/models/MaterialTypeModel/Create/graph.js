import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createMaterialType',
    serviceName: 'admin',
    query: gql`
      mutation createMaterialType($title: String!, $details: String) {
        createMaterialType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createSiteType',
    serviceName: 'admin',
    query: gql`
      mutation createSiteType($title: String!, $details: String) {
        createSiteType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

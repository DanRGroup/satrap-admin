import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createWorkshopStatus',
    serviceName: 'admin',
    query: gql`
      mutation createWorkshopStatus($title: String!, $details: String) {
        createWorkshopStatus(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

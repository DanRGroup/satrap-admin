import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createShiftType',
    serviceName: 'admin',
    query: gql`
      mutation createShiftType($title: String!, $details: String) {
        createShiftType(title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteWorkshop',
    serviceName: 'admin',
    query: gql`
      mutation deleteWorkshop($ids: [String]!) {
        deleteWorkshop(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

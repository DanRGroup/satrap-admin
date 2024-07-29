import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteContract',
    serviceName: 'companyAdmin',
    query: gql`
      mutation deleteContract($ids: [String]!) {
        deleteContract(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

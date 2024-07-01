import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteContractType',
    serviceName: 'admin',
    query: gql`
      mutation deleteContractType($ids: [String]!) {
        deleteContractType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

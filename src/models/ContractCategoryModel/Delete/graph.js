import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteContractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      mutation deleteContractCategory($ids: [String]!) {
        deleteContractCategory(ids: $ids) {
          influenced_count
          messages
        }
      }
    `,
  },
};

export default schema;

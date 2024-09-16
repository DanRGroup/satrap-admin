import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteCompany',
    serviceName: 'admin',
    query: gql`
      mutation deleteCompany($ids: [String]!) {
        deleteCompany(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

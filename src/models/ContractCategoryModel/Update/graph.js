import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractCategory',
    serviceName: 'auth',
    query: gql`
      query contractCategory($ids: [String], $for_admin: Int) {
        contractCategory(ids: $ids, for_admin: $for_admin) {
          title
          alias
          details
          is_active
        }
      }
    `,
  },
  update: {
    name: 'updateContractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      mutation updateContractCategory(
        $ids: [String]!
        $title: String
        $alias: String
        $is_active: Int
        $details: String
      ) {
        updateContractCategory(ids: $ids, title: $title, alias: $alias, details: $details, is_active: $is_active) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createContractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      mutation createContractCategory(
        $parent_id: String
        $title: String!
        $alias: String
        $is_active: Int
        $details: String
      ) {
        createContractCategory(
          parent_id: $parent_id
          title: $title
          alias: $alias
          details: $details
          is_active: $is_active
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

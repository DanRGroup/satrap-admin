import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      query contractCategory($ids: [String]) {
        contractCategory(ids: $ids) {
          data {
            title
            is_active
            parent {
              id
              title
            }
          }
        }
      }
    `,
  },
  update: {
    name: 'updateContractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      mutation updateContractCategory($ids: [String]!, $title: String, $is_active: Int) {
        updateContractCategory(ids: $ids, title: $title, is_active: $is_active) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractFinancial',
    serviceName: 'companyAdmin',
    query: gql`
      query contractFinancial($ids: [String]) {
        contractFinancial(ids: $ids) {
          data {
            id
            contract {
              id
              title
            }
            reported_in
            description
            cost
          }
        }
      }
    `,
  },
  update: {
    name: 'updateContractFinancial',
    serviceName: 'companyAdmin',
    query: gql`
      mutation updateContractFinancial($ids: [String]!, $reported_in: String, $description: String) {
        updateContractFinancial(ids: $ids, reported_in: $reported_in, description: $description) {
          messages
        }
      }
    `,
  },
};

export default schema;

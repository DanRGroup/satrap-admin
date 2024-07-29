import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractFinancial',
    serviceName: 'companyAdmin',
    query: gql`
      query contractFinancial($ids: [String], $contract_ids: [String]) {
        contractFinancial(ids: $ids, contract_ids: $contract_ids) {
          model {
            id
            cost
            type
            payer
            reported_in
            description
            contract {
              id
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

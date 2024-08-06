import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractFinancial',
    serviceName: 'companyAdmin',
    query: gql`
      query contractFinancial($contract_ids: [String]) {
        contractFinancial(contract_ids: $contract_ids) {
          data {
            id
            contract {
              id
              title
            }
            reported_in
            cost
          }
          total
        }
      }
    `,
  },
  get: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract($ids: [String], $title: String) {
        contract(ids: $ids, title: $title) {
          data {
            id
            title
            workshop {
              id
              title
            }
            type {
              id
              title
            }
            employer {
              id
              firstname
              lastname
            }
            operation_type {
              id
              title
            }
            media {
              id
              full_url
            }
          }
          total
        }
      }
    `,
  },
  create: {
    name: 'createContractFinancial',
    serviceName: 'companyAdmin',
    query: gql`
      mutation createContractFinancial(
        $contract_id: String!
        $cost: String
        $type: String
        $payer: String
        $reported_in: String
        $description: String
      ) {
        createContractFinancial(
          contract_id: $contract_id
          cost: $cost
          type: $type
          payer: $payer
          reported_in: $reported_in
          description: $description
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

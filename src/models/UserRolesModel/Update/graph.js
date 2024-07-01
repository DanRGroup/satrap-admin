import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String], $title: String) {
        contractType(ids: $ids, title: $title) {
          data {
            id
            title
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
  update: {
    name: 'updateContractType',
    serviceName: 'admin',
    query: gql`
      mutation updateContractType($ids: [String]!, $title: String!, $details: String) {
        updateContractType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

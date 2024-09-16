import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'company',
    serviceName: 'graphql',
    query: gql`
      query company($ids: [String], $title: String) {
        company(ids: $ids, title: $title) {
          data {
            id
            title
          }
          total
        }
      }
    `,
  },
  update: {
    name: 'updateCompany',
    serviceName: 'admin',
    query: gql`
      mutation updateCompany($ids: [String]!, $title: String!, $details: String) {
        updateCompany(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

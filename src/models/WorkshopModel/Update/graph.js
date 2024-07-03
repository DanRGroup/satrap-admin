import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop($ids: [String], $title: String, $for_admin: Int) {
        workshop(ids: $ids, title: $title, for_admin: $for_admin) {
          data {
            id
            title
            alias
            manager {
              id
              firstname
              lastname
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
  update: {
    name: 'updatePaymentStatus',
    serviceName: 'admin',
    query: gql`
      mutation updatePaymentStatus($ids: [String]!, $title: String!, $code: String, $details: String) {
        updatePaymentStatus(ids: $ids, title: $title, code: $code, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'paymentStatus',
    serviceName: 'auth',
    query: gql`
      query paymentStatus($ids: [String], $title: String) {
        paymentStatus(ids: $ids, title: $title) {
          data {
            id
            title
            details
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

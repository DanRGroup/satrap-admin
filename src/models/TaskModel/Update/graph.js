import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          data {
            driver {
              id
              firstname
              lastname
            }
            operation_type {
              id
              title
            }
            workshop {
              id
              title
            }
            material_type {
              id
              title
            }
            status {
              id
              title
            }
            supervisor {
              id
              firstname
              lastname
            }
            creator {
              id
              firstname
              lastname
            }
            updator {
              id
              firstname
              lastname
            }
            media {
              full_url
            }
            type {
              id
              title
            }
            workshop {
              id
              title
            }
            site {
              id
              title
            }
            shift_type {
              id
              title
            }
            start_time
            end_time
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

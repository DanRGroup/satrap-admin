import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'operationType',
    serviceName: 'graphql',
    query: gql`
      query operationType($ids: [String], $title: String) {
        operationType(ids: $ids, title: $title) {
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
    name: 'updateOperationType',
    serviceName: 'admin',
    query: gql`
      mutation updateOperationType($ids: [String]!, $title: String!, $details: String) {
        updateOperationType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

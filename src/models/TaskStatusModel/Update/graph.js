import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'taskStatus',
    serviceName: 'graphql',
    query: gql`
      query taskStatus($ids: [String], $title: String) {
        taskStatus(ids: $ids, title: $title) {
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
    name: 'updateTaskStatus',
    serviceName: 'admin',
    query: gql`
      mutation updateTaskStatus($ids: [String]!, $title: String!, $details: String) {
        updateTaskStatus(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'taskType',
    serviceName: 'graphql',
    query: gql`
      query taskType($ids: [String], $title: String) {
        taskType(ids: $ids, title: $title) {
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
    name: 'updateTaskType',
    serviceName: 'admin',
    query: gql`
      mutation updateTaskType($ids: [String]!, $title: String!, $details: String) {
        updateTaskType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

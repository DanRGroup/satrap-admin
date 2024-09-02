import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'taskStatus',
    serviceName: 'graphql',
    query: gql`
      query taskStatus($ids: [String]) {
        taskStatus(ids: $ids) {
          data {
            id
            title
          }
        }
      }
    `,
  },
};

export default schema;

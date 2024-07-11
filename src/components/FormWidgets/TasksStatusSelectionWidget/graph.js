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
            media {
              id
              full_url
            }
          }
        }
      }
    `,
  },
};

export default schema;

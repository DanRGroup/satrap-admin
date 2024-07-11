import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'taskType',
    serviceName: 'graphql',
    query: gql`
      query taskType($ids: [String]) {
        taskType(ids: $ids) {
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

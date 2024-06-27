import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'taskType',
    serviceName: 'graphql',
    query: gql`
      query taskType($ids: [String]) {
        taskType(ids: $ids) {
          data {
            media {
              id
              name
              full_url
              size
              collection_name
            }
          }
        }
      }
    `,
  },
};

export default schema;

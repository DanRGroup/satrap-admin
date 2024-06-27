import { gql } from '@apollo/client';

const schema = {
  list: {
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
};

export default schema;

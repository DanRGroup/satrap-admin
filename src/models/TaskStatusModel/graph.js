import { gql } from '@apollo/client';

const schema = {
  list: {
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
};

export default schema;

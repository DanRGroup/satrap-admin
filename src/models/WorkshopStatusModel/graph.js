import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshopStatus',
    serviceName: 'graphql',
    query: gql`
      query workshopStatus($ids: [String], $title: String) {
        workshopStatus(ids: $ids, title: $title) {
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

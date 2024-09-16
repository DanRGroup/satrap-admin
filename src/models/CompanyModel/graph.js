import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'company',
    serviceName: 'graphql',
    query: gql`
      query company($ids: [String], $title: String) {
        company(ids: $ids, title: $title) {
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

import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'materialType',
    serviceName: 'graphql',
    query: gql`
      query materialType($ids: [String], $title: String) {
        materialType(ids: $ids, title: $title) {
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

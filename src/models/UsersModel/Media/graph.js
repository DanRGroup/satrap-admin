import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'users',
    serviceName: 'unitadmin',
    query: gql`
      query users($ids: [String]) {
        users(ids: $ids) {
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

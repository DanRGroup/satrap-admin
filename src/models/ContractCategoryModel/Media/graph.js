import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'contractCategory',
    serviceName: 'auth',
    query: gql`
      query contractCategory($ids: [String]) {
        contractCategory(ids: $ids) {
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

import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractCategory',
    serviceName: 'auth',
    query: gql`
      query contractCategory($ids: [String]) {
        contractCategory(ids: $ids) {
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

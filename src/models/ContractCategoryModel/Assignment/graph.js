import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractCategory',
    serviceName: 'auth',
    query: gql`
      query contractCategory($ids: [String]) {
        contractCategory(ids: $ids) {
          data {
            id
            title
          }
        }
      }
    `,
  },
};

export default schema;

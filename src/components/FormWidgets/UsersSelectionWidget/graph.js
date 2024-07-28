import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'users',
    serviceName: 'shared',
    query: gql`
      query users($ids: [String]) {
        users(ids: $ids) {
          data {
            id
            username
            firstname
            lastname
            type {
              id
              title
            }
            status {
              id
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

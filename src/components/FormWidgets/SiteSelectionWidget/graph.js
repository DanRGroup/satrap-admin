import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query site($ids: [String]) {
        site(ids: $ids) {
          data {
            id
            title
            manager {
              id
              firstname
              lastname
            }
            type {
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

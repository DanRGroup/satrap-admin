import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'company',
    serviceName: 'graphql',
    query: gql`
      query company($ids: [String]) {
        company(ids: $ids) {
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

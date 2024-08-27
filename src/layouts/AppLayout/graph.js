import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String], $title: String) {
        contractType(ids: $ids, title: $title) {
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

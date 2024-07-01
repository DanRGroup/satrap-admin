import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'role',
    serviceName: 'workshopadmin',
    query: gql`
      query role($ids: [String], $title: String) {
        role(ids: $ids, title: $title) {
          data {
            id
            title
          }
          total
        }
      }
    `,
  },
};

export default schema;

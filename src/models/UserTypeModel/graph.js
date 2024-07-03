import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'userType',
    serviceName: 'workshopadmin',
    query: gql`
      query userType($ids: [String]) {
        userType(ids: $ids) {
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

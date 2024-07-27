import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'users',
    serviceName: 'siteadmin',
    query: gql`
      query {
        users {
          total
        }
      }
    `,
  },
};

export default schema;

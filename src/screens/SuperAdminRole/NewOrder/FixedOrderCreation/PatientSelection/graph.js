import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'users',
    serviceName: 'unitadmin',
    query: gql`
      query users($page: Int, $limit: Int, $username: String, $type_ids: [String]) {
        users(page: $page, limit: $limit, username: $username, type_ids: $type_ids) {
          data {
            id
            firstname
            lastname
            cellphone
            media {
              full_url
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;

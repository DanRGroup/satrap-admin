import { gql } from '@apollo/client';

const schema = {
  assignRole: {
    name: 'createShopsUser',
    serviceName: 'shopadmin',
    query: gql`
      mutation createShopsUser($shop_id: String, $user_ids: [String]!, $role_id: String!, $details: String) {
        createShopsUser(shop_id: $shop_id, user_ids: $user_ids, role_id: $role_id, details: $details) {
          model {
            id
            shop {
              id
              title
            }
            user {
              id
              cellphone
              firstname
              lastname
            }
            # role { }
            details
          }
          messages
        }
      }
    `,
  }
};

export default schema;

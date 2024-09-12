import { gql } from '@apollo/client';

const schema = {
  assignRole: {
    name: 'changePassword',
    serviceName: 'workshopAdmin',
    query: gql`
      mutation changePassword($user_ids: [String]!, $password: String) {
        changePassword(user_ids: $user_ids, password: $password) {
          messages
        }
      }
    `,
  },
};

export default schema;

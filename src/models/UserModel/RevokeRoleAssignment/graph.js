import { gql } from '@apollo/client';

const schema = {
  revokeUserRole: {
    name: 'revokeUserRole',
    serviceName: 'shared',
    query: gql`
      mutation revokeUserRole($user_ids: [String]!, $roles: [String]!) {
        revokeUserRole(user_ids: $user_ids, roles: $roles) {
          influenced_count
          messages
        }
      }
    `,
  },
};

export default schema;

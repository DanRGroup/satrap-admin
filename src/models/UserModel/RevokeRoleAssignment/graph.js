import { gql } from '@apollo/client';

const schema = {
  revokeUserRole: {
    name: 'revokeUserRole',
    serviceName: 'shared',
    query: gql`
      mutation revokeUserRole($user_id: String!, $role_id: String!, $workshop_id: String) {
        revokeUserRole(user_id: $user_id, role_id: $role_id, workshop_id: $workshop_id) {
          influenced_count
          messages
        }
      }
    `,
  },
};

export default schema;

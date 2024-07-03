import { gql } from '@apollo/client';

const schema = {
  assignRole: {
    name: 'createWorkshopsUser',
    serviceName: 'workshopadmin',
    query: gql`
      mutation createWorkshopsUser($workshop_id: String, $user_ids: [String]!, $role_id: String!, $details: String) {
        createWorkshopsUser(workshop_id: $workshop_id, user_ids: $user_ids, role_id: $role_id, details: $details) {
          model {
            id
            workshop {
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
  },
};

export default schema;

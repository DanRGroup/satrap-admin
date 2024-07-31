import { gql } from '@apollo/client';

const schema = {
  assignRole: {
    name: 'createWorkshopsUser',
    serviceName: 'shared',
    query: gql`
      mutation createWorkshopsUser($workshop_id: String, $user_ids: [String]!, $role_id: String!) {
        createWorkshopsUser(workshop_id: $workshop_id, user_ids: $user_ids, role_id: $role_id) {
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

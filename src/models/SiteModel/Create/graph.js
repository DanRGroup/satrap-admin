import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createSite',
    serviceName: 'admin',
    query: gql`
      mutation createSite(
        $title: String!
        $manager_id: String
        $type_id: String
        $lat: String
        $lng: String
        $status: String
        $is_active: Int
      ) {
        createSite(
          title: $title
          manager_id: $manager_id
          type_id: $type_id
          lat: $lat
          lng: $lng
          status: $status
          is_active: $is_active
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

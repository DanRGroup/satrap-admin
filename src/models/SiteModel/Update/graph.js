import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query site($ids: [String], $title: String) {
        site(ids: $ids, title: $title) {
          data {
            id
            title
            lat
            lng
            is_active
            manager {
              id
              firstname
              lastname
            }
            type {
              id
              title
            }
          }
          total
        }
      }
    `,
  },
  update: {
    name: 'updateSite',
    serviceName: 'siteadmin',
    query: gql`
      mutation updateSite(
        $ids: [String]!
        $title: String!
        $manager_id: String
        $type_id: String
        $lat: String
        $lng: String
        $status: String
      ) {
        updateSite(
          ids: $ids
          title: $title
          manager_id: $manager_id
          type_id: $type_id
          lat: $lat
          lng: $lng
          status: $status
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query site(
        $ids: [String]
        $title: String
        $manager_ids: [String]
        $type_ids: [String]
        $is_active: Int
        $status: String
      ) {
        site(
          ids: $ids
          title: $title
          manager_ids: $manager_ids
          type_ids: $type_ids
          is_active: $is_active
          status: $status
        ) {
          data {
            id
            title
            manager {
              firstname
              lastname
            }
            type {
              id
              title
            }
            media {
              id
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

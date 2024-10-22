import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop($ids: [String], $title: String) {
        workshop(ids: $ids, title: $title) {
          data {
            id
            title
            alias
            lat
            lng
            manager {
              id
              firstname
              lastname
            }
            media {
              id
              full_url
            }
            status {
              id
            }
          }
          total
        }
      }
    `,
  },
  update: {
    name: 'updateWorkshop',
    serviceName: 'workshopAdmin',
    query: gql`
      mutation updateWorkshop(
        $ids: [String]!
        $title: String!
        $alias: String
        #$shipping_cost_config: String
        $lat: String
        $lng: String
        $status_id: String
        $is_active: Int
        $manager_id: String #$creator_id: String #$updator_id: String #$local_info: String #$support_info: String #$management_info: String #$configs: String
      ) {
        updateWorkshop(
          ids: $ids
          title: $title
          alias: $alias
          #shipping_cost_config: $shipping_cost_config
          lat: $lat
          lng: $lng
          status_id: $status_id
          is_active: $is_active
          manager_id: $manager_id #creator_id: $creator_id #updator_id: $updator_id #local_info: $local_info #support_info: $support_info #management_info: $management_info #configs: $configs
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

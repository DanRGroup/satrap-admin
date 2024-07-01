import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createworkshop',
    serviceName: 'admin',
    query: gql`
      mutation createWorkshop(
        $title: String!
        $alias: String
        #$shipping_cost_config: String
        $lat: String
        $lng: String
        #$status_id: String
        $is_active: Int
        $manager_id: String
      ) #$creator_id: String
      #$updator_id: String
      #$local_info: String
      #$support_info: String
      #$management_info: String
      #$configs: String
      {
        createWorkshop(
          title: $title
          alias: $alias
          #shipping_cost_config: $shipping_cost_config
          lat: $lat
          lng: $lng
          #status_id: $status_id
          is_active: $is_active
          manager_id: $manager_id
        ) #creator_id: $creator_id
        #updator_id: $updator_id
        #local_info: $local_info
        #support_info: $support_info
        #management_info: $management_info
        #configs: $configs
        {
          messages
        }
      }
    `,
  },
};

export default schema;

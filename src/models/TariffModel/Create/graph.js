import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createTariff',
    serviceName: 'companyAdmin',
    query: gql`
      mutation createTariff(
        $task_type_id: String!
        $operation_type_id: String!
        $workshop_id: String!
        $site_id: String
        $material_type_id: String
        $shift_type_id: String
        $cost: String!
        $creator_id: String
        $updator_id: String
        $is_active: Int
        $description: String
      ) {
        createTariff(
          task_type_id: $task_type_id
          operation_type_id: $operation_type_id
          workshop_id: $workshop_id
          site_id: $site_id
          material_type_id: $material_type_id
          shift_type_id: $shift_type_id
          cost: $cost
          creator_id: $creator_id
          updator_id: $updator_id
          is_active: $is_active
          description: $description
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

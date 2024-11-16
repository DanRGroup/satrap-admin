import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff($ids: [String]) {
        tariff(ids: $ids) {
          data {
            task_type {
              id
              title
            }
            operation_type {
              id
              title
            }
            workshop {
              id
              title
            }
            site {
              id
              title
            }
            material_type {
              id
              title
            }
            shift_type {
              id
              title
            }
            contract {
              id
              title
            }
            cost
            creator {
              id
              firstname
              lastname
            }
            updator {
              id
              firstname
              lastname
            }
            is_active
            description
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
  update: {
    name: 'updateTariff',
    serviceName: 'companyAdmin',
    query: gql`
      mutation updateTariff(
        $ids: [String]!
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
        updateTariff(
          ids: $ids
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

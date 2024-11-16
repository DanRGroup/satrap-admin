import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff(
        $ids: [String]
        $task_type_ids: [String]
        $contract_ids: [String]
        $material_type_ids: [String]
        $operation_type_ids: [String]
        $workshop_ids: [String]
        $site_ids: [String]
      ) {
        tariff(
          ids: $ids
          task_type_ids: $task_type_ids
          contract_ids: $contract_ids
          material_type_ids: $material_type_ids
          operation_type_ids: $operation_type_ids
          workshop_ids: $workshop_ids
          site_ids: $site_ids
        ) {
          data {
            id
            task_type {
              id
              title
            }
            workshop {
              id
              title
            }
            material_type {
              id
              title
            }
            site {
              id
              title
            }
            media {
              id
              full_url
            }
            operation_type {
              id
              title
            }
            shift_type {
              id
              title
            }
            cost
          }
          total
        }
      }
    `,
  },
};

export default schema;

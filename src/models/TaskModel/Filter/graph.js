import { gql } from '@apollo/client';

const schema = {
  tariffs: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query tariff(
        $ids: [String]
        $task_type_ids: [String]
        $material_type_ids: [String]
        $operation_type_ids: [String]
        $workshop_ids: [String]
        $site_ids: [String]
      ) {
        tariff(
          ids: $ids
          task_type_ids: $task_type_ids
          material_type_ids: $material_type_ids
          operation_type_ids: $operation_type_ids
          workshop_ids: $workshop_ids
          site_ids: $site_ids
        ) {
          data {
            id
            task_type {
              id
            }
            workshop {
              id
            }
            material_type {
              id
            }
            site {
              id
            }
            operation_type {
              id
            }
            shift_type {
              id
            }
          }
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task(
        $ids: [String]
        $workshop_ids: [String]
        $site_ids: [String]
        $material_type_ids: [String]
        $operation_type_ids: [String]
        $status_ids: [String]
        $type_ids: [String]
      ) {
        task(
          ids: $ids
          workshop_ids: $workshop_ids
          site_ids: $site_ids
          material_type_ids: $material_type_ids
          operation_type_ids: $operation_type_ids
          status_ids: $status_ids
          type_ids: $type_ids
        ) {
          records {
            data {
              id
              start_time
              end_time
              type {
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
              vehicle {
                plaque
              }
              driver {
                id
                firstname
                lastname
              }
              material_type {
                id
                title
              }
              created_at
            }
          }
        }
      }
    `,
  },
};

export default schema;

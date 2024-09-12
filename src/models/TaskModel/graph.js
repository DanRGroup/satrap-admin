import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task(
        $ids: [String]
        $driver_ids: [String]
        $workshop_ids: [String]
        $site_ids: [String]
        $vehicle_ids: [String]
        $shift_type_ids: [String]
        $material_type_ids: [String]
        $operation_type_ids: [String]
        $status_ids: [String]
        $type_ids: [String]
        $created_at: String
        $min_created_at: String
        $max_created_at: String
        $min_created_at_equality: String
        $max_created_at_equality: String
        $match_location: String
      ) {
        task(
          ids: $ids
          driver_ids: $driver_ids
          workshop_ids: $workshop_ids
          site_ids: $site_ids
          vehicle_ids: $vehicle_ids
          shift_type_ids: $shift_type_ids
          material_type_ids: $material_type_ids
          operation_type_ids: $operation_type_ids
          status_ids: $status_ids
          type_ids: $type_ids
          created_at: $created_at
          min_created_at: $min_created_at
          max_created_at: $max_created_at
          min_created_at_equality: $min_created_at_equality
          max_created_at_equality: $max_created_at_equality
          match_location: $match_location
        ) {
          records {
            data {
              id
              media {
                full_url
              }
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
                id
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
              baskul
              start_time
              end_time
            }
            total
          }
          total_houre
          total_service
          total_shift
          total_tonnage
          total_cost
        }
      }
    `,
  },
};

export default schema;

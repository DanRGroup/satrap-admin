import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createSiteReport',
    serviceName: 'admin',
    query: gql`
      mutation createSiteReport(
        $vehicle_id: String!
        $driver_id: String
        $operation_type_id: String
        $workshop_id: String
        $site_id: String
        $material_type_id: String
        $shift_type_id: String
        $start_time: String
        $end_time: String
        $cost: String
        $bill_number: String
        $description: String
        $details: String
        $creator_id: String
        $updator_id: String
        $tonnage: Int
      ) {
        createSiteReport(
          vehicle_id: $vehicle_id
          driver_id: $driver_id
          operation_type_id: $operation_type_id
          workshop_id: $workshop_id
          site_id: $site_id
          material_type_id: $material_type_id
          shift_type_id: $shift_type_id
          start_time: $start_time
          end_time: $end_time
          cost: $cost
          bill_number: $bill_number
          description: $description
          details: $details
          creator_id: $creator_id
          updator_id: $updator_id
          tonnage: $tonnage
        ) {
          messages
        }
      }
    `,
  },
};

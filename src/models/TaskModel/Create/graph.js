import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createTasks',
    serviceName: 'auth',
    query: gql`
      mutation createTask(
        $vehicle_id: String!
        #$driver_id: String!
        $type_id: String!
        $operation_type_id: String!
        $workshop_id: String!
        $site_id: String
        $material_type_id: String!
        $shift_type_id: String!
        #$status_id: String
        $start_time: String
        #$end_time: String
        #$stop_dueto: String
        #$cost: String
        #$bill_number: String
        $description: String
        #$details: String
        $supervisor_id: String
        #$creator_id: String
        #$updator_id: String
        $tonnage: String #$coefficient: String #$have_food: Int
      ) {
        createTask(
          vehicle_id: $vehicle_id
          #driver_id: $driver_id
          type_id: $type_id
          operation_type_id: $operation_type_id
          workshop_id: $workshop_id
          site_id: $site_id
          material_type_id: $material_type_id
          shift_type_id: $shift_type_id
          #status_id: $status_id
          start_time: $start_time
          #end_time: $end_time
          #stop_dueto: $stop_dueto
          #cost: $cost
          #bill_number: $bill_number
          description: $description
          #details: $details
          supervisor_id: $supervisor_id
          #creator_id: $creator_id
          #updator_id: $updator_id
          tonnage: $tonnage #coefficient: $coefficient #have_food: $have_food
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

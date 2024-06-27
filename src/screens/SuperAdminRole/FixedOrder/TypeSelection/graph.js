import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'saveOrderAction',
    serviceName: 'auth',
    query: gql`
      mutation saveOrderAction(
        $call_me: Int
        $lab_id: String!
        $unit_id: String
        $user_id: String!
        $doctor_id: String!
        $description: String
        $tooth_numbers: [String]!
        $action_ids: [String]
        $technical_informations: String
      ) {
        saveOrderAction(
          call_me: $call_me
          lab_id: $lab_id
          unit_id: $unit_id
          user_id: $user_id
          doctor_id: $doctor_id
          tooth_numbers: $tooth_numbers
          description: $description
          action_ids: $action_ids
          technical_informations: $technical_informations
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

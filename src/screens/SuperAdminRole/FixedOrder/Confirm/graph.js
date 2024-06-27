import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'saveOrderAction',
    serviceName: 'auth',
    query: gql`
      mutation saveOrderAction(
        $call_me: Int
        $user_id: String!
        $doctor_id: String!
        $demand_date: String
        $description: String
        $technical_informations: String
      ) {
        saveOrderAction(
          call_me: $call_me
          user_id: $user_id
          doctor_id: $doctor_id
          demand_date: $demand_date
          description: $description
          technical_informations: $technical_informations
        ) {
          model {
            id
          }
          messages
        }
      }
    `,
  },
};

export default schema;

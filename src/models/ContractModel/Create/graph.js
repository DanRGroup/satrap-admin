import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createContract',
    serviceName: 'admin',
    query: gql`
      mutation createContract(
        $title: String!
        $workshop_id: String
        $type_id: String
        $employer_id: String
        $intermediary_id: String
        $status: String
        $start_date: String
        $end_date: String
        $cost: String
        $number: String
        $details: String
      ) {
        createContract(
          title: $title
          workshop_id: $workshop_id
          type_id: $type_id
          employer_id: $employer_id
          intermediary_id: $intermediary_id
          status: $status
          start_date: $start_date
          end_date: $end_date
          cost: $cost
          number: $number
          details: $details
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

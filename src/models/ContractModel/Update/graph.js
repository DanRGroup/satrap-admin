import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract($ids: [String], $title: String) {
        contract(ids: $ids, title: $title) {
          data {
            id
            title
            workshop {
              id
              title
            }
            type {
              id
              title
            }
            employer {
              id
              firstname
              lastname
            }
            status
            start_date
            end_date
            cost
            number
            details
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
    name: 'updateContract',
    serviceName: 'admin',
    query: gql`
      mutation updateContract(
        $ids: [String]!
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
        updateContract(
          ids: $ids
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

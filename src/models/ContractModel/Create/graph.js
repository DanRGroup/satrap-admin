import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createContract',
    serviceName: 'companyAdmin',
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
        $cost: String!
        $number: String
        $details: String
        $operation_type_id: String
        $forecast_amount: String!
        $contractual_number: String
        $category_id: String
        $is_civil: Int
        $company_id: String
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
          operation_type_id: $operation_type_id
          forecast_amount: $forecast_amount
          contractual_number: $contractual_number
          category_id: $category_id
          is_civil: $is_civil
          company_id: $company_id
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

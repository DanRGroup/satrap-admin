import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract(
        $ids: [String]
        $title: String
        $workshop_ids: [String]
        $type_ids: [String]
        #$employer_ids: [String]
        $status: String
        $with_calculations: Int
        $category_ids: [String]
      ) {
        contract(
          ids: $ids
          title: $title
          workshop_ids: $workshop_ids
          type_ids: $type_ids
          #employer_ids: $employer_ids
          status: $status
          with_calculations: $with_calculations
          category_ids: $category_ids
        ) {
          data {
            id
            title
            contractual_number
            is_civil
            employer {
              firstname
              lastname
            }
            workshop {
              id
              title
            }
            media {
              id
              full_url
            }
            financials {
              cost
            }
            operation_type {
              id
              title
            }
            total_houre
            total_service
            total_tonnage
            progress
          }
          total
        }
      }
    `,
  },
};

export default schema;

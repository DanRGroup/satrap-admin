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
        $employer_ids: [String]
        $company_ids: [String]
        $status: String
        $with_calculations: Int
        $category_ids: [String]
      ) {
        contract(
          ids: $ids
          title: $title
          workshop_ids: $workshop_ids
          type_ids: $type_ids
          employer_ids: $employer_ids
          company_ids: $company_ids
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
            company {
              id
              title
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
            category {
              id
              title
            }
            total_done_cost
            progress_done_cost
            cost
            forecast_amount
            total_cubic_meter
            total_houre
            total_service
            total_tonnage
            progress
            number
          }
          total
        }
      }
    `,
  },
};

export default schema;

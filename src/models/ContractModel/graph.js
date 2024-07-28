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
      ) {
        contract(
          ids: $ids
          title: $title
          workshop_ids: $workshop_ids
          type_ids: $type_ids
          #employer_ids: $employer_ids
          status: $status
        ) {
          data {
            id
            title
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
          }
          total
        }
      }
    `,
  },
};

export default schema;

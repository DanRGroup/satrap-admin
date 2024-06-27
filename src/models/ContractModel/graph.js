import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract($ids: [String], $title: String) {
        contract(ids: $ids, title: $title) {
          data {
            id
            title
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

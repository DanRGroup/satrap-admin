import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract($ids: [String]) {
        contract(ids: $ids) {
          data {
            id
            title
            media {
              id
              full_url
            }
          }
        }
      }
    `,
  },
};

export default schema;

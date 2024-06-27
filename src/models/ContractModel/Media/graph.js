import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'contract',
    serviceName: 'graphql',
    query: gql`
      query contract($ids: [String]) {
        contract(ids: $ids) {
          data {
            media {
              id
              name
              full_url
              size
              collection_name
            }
          }
        }
      }
    `,
  },
};

export default schema;

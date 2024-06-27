import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contracts',
    serviceName: 'grapghql',
    query: gql`
      query contracts($ids: [String]) {
        contracts(ids: $ids) {
          data {
            id
            title
            media {
              full_url
            }
            producer {
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

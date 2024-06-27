import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'site',
    serviceName: 'grapghql',
    query: gql`
      query site($ids: [String]) {
        contractTypes(ids: $ids) {
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

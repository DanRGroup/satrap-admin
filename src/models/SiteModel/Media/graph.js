import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query site($ids: [String]) {
        site(ids: $ids) {
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

import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'lab',
    serviceName: 'graphql',
    query: gql`
      query lab($for_admin: Int, $just_favorites: Int) {
        lab(for_admin: $for_admin, just_favorites: $just_favorites) {
          data {
            id
            title
            alias
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

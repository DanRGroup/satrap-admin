import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'userStatus',
    serviceName: 'auth',
    query: gql`
      query userStatus($ids: [String], $title: String) {
        userStatus(ids: $ids, title: $title) {
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

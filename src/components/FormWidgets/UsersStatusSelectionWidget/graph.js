import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'userStatus',
    serviceName: 'auth',
    query: gql`
      query userStatus($ids: [String]) {
        userStatus(ids: $ids) {
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

import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'siteReport',
    serviceName: 'auth',
    query: gql`
      query siteReport($ids: [String], $title: String) {
        siteReport(ids: $ids, title: $title) {
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

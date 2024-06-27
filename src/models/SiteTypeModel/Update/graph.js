import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String], $title: String) {
        siteType(ids: $ids, title: $title) {
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
  update: {
    name: 'updateSiteType',
    serviceName: 'admin',
    query: gql`
      mutation updateSiteType($ids: [String]!, $title: String!, $details: String) {
        updateSiteType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

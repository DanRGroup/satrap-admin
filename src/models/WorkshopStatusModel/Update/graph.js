import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'workshopStatus',
    serviceName: 'graphql',
    query: gql`
      query workshopStatus($ids: [String], $title: String) {
        workshopStatus(ids: $ids, title: $title) {
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
    name: 'updateWorkshopStatus',
    serviceName: 'admin',
    query: gql`
      mutation updateWorkshopStatus($ids: [String]!, $title: String!, $details: String) {
        updateWorkshopStatus(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

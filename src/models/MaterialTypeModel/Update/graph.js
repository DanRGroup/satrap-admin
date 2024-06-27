import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'materialType',
    serviceName: 'graphql',
    query: gql`
      query materialType($ids: [String], $title: String) {
        materialType(ids: $ids, title: $title) {
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
    name: 'updateMaterialType',
    serviceName: 'admin',
    query: gql`
      mutation updateMaterialType($ids: [String]!, $title: String!, $details: String) {
        updateMaterialType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteSiteType',
    serviceName: 'admin',
    query: gql`
      mutation deleteSiteType($ids: [String]!) {
        deleteSiteType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

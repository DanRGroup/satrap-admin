import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteSiteReport',
    serviceName: 'admin',
    query: gql`
      mutation deleteSiteReport($ids: [String]!) {
        deleteSiteReport(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

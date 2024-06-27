import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteSite',
    serviceName: 'admin',
    query: gql`
      mutation deleteSite($ids: [String]!) {
        deleteSite(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

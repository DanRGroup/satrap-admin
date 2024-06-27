import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteWorkshopStatus',
    serviceName: 'admin',
    query: gql`
      mutation deleteWorkshopStatus($ids: [String]!) {
        deleteWorkshopStatus(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

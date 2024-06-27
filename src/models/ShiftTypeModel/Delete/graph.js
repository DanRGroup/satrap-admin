import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteShiftType',
    serviceName: 'admin',
    query: gql`
      mutation deleteShiftType($ids: [String]!) {
        deleteShiftType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteTask',
    serviceName: 'companyAdmin',
    query: gql`
      mutation deleteTask($ids: [String]!) {
        deleteTask(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

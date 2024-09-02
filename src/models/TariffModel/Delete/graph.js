import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteTariff',
    serviceName: 'companyAdmin',
    query: gql`
      mutation deleteTariff($ids: [String]!) {
        deleteTariff(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;

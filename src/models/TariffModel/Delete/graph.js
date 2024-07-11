import { gql } from '@apollo/client';

const schema = {
  delete: {
    name: 'deleteTariff',
    serviceName: 'siteadmin',
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

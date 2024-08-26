import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'role',
    serviceName: 'workshopAdmin',
    query: gql`
      query role($ids: [String]) {
        role(ids: $ids) {
          data {
            id
            title
            name
          }
          total
        }
      }
    `,
  },
};

export default schema;

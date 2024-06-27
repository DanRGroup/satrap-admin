import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'taskType',
    serviceName: 'grapghql',
    query: gql`
      query taskType($ids: [String]) {
        taskType(ids: $ids) {
          data {
            id
            title
            media {
              full_url
            }
            producer {
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;

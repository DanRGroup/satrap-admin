import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          records {
            data {
              media {
                id
                name
                full_url
                size
                collection_name
              }
            }
          }
        }
      }
    `,
  },
};

export default schema;

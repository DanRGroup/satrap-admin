import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractCategory',
    serviceName: 'auth',
    query: gql`
      query contractCategory($title: String, $orderBy_field: String, $orderBy_direction: String) {
        contractCategory(title: $title, orderBy_field: $orderBy_field, orderBy_direction: $orderBy_direction) {
          id
          parent {
            id
          }
          children {
            id
            title
            media {
              full_url
            }
            children {
              id
            }
          }
        }
      }
    `,
  },
};

export default schema;

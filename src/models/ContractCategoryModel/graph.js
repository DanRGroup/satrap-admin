import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractCategory',
    serviceName: 'companyAdmin',
    query: gql`
      query contractCategory($title: String, $orderBy_field: String, $orderBy_direction: String, $category_id: String) {
        contractCategory(
          title: $title
          orderBy_field: $orderBy_field
          orderBy_direction: $orderBy_direction
          category_id: $category_id
        ) {
          data {
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
              parent {
                id
                title
              }
              children {
                id
              }
            }
          }
        }
      }
    `,
  },
};

export default schema;

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
            title
            parent {
              id
              title
            }
            children {
              id
              title
              media {
                full_url
              }
              children {
                id
                title
              }
            }
          }
        }
      }
    `,
  },
};

export default schema;

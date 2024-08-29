import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'productCategory',
    serviceName: 'grapghql',
    query: gql`
      query productCategory($ids: [String], $for_admin: Int) {
        productCategory(ids: $ids, for_admin: $for_admin) {
          title
          alias
          product_categories_shops {
            details
            link_to
            is_active
            shop {
              id
            }
          }
        }
      }
    `,
  },
  update: {
    name: 'updateProductCategoryShop',
    serviceName: 'shopadmin',
    query: gql`
      mutation updateProductCategoryShop(
        $shop_id: String!
        $details: String
        $link_to: String
        $product_category_id: String!
      ) {
        updateProductCategoryShop(
          shop_id: $shop_id
          details: $details
          link_to: $link_to
          product_category_id: $product_category_id
        ) {
          messages
          influenced_count
        }
      }
    `,
  },
};

export default schema;

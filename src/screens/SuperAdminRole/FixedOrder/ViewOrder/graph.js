import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'order',
    serviceName: 'auth',
    query: gql`
      query order($ids: [String], $for_admin: Int) {
        order(ids: $ids, for_admin: $for_admin) {
          data {
            id
            total_cost
            tooth_number
            description
            demand_time
            technical_informations
            media {
              full_url
              file_name
              mime_type
            }
            customer {
              firstname
              lastname
              media {
                full_url
              }
            }
            doctor {
              firstname
              lastname
              specialist
              medical_number
              media {
                full_url
              }
            }
            lab {
              id
              title
            }
            unit {
              id
              title
            }
          }
        }
      }
    `,
  },
  update: {
    name: 'updateUser',
    serviceName: 'unitadmin',
    query: gql`
      mutation confirmOrder(
        $order_id: String!
        $technical_informations: String
        $description: String
        $call_me: Int # >0 , 1
        $user_id: String
      ) {
        confirmOrder(
          order_id: $order_id
          technical_informations: $technical_informations
          description: $description
          call_me: $call_me
          user_id: $user_id
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

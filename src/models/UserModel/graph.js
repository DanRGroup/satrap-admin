import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'users',
    serviceName: 'shared',
    query: gql`
      query users(
        $ids: [String]
        $national_codes: [String]
        $emails: [String]
        $tellphones: [String]
        $cellphones: [String]
        $status_ids: [String]
        $username: String
        $firstname: String
        $lastname: String
        $gender: Int # 0 , 1
        $is_active: Int # 0 , 1
        $birth_date: String
        $type_ids: [String]
        $role_id: String
        $has_role_name: String # کاربرانی که این نقش را دارند
        $has_permission_name: String # کاربرانی که این مجوز را دارند
        $device_zones: [String] # ios,android,a_device,no_device
        $user_category_ids: [String] #کاربرانی که به این مجموعه‌ها تعلق دارند
        $user_section: String # CUSTOMER,OPERATOR,CATEGORY
        $page: Int
        $limit: Int
      ) #$for_admin: Int
      {
        users(
          ids: $ids
          national_codes: $national_codes
          emails: $emails
          tellphones: $tellphones
          cellphones: $cellphones
          status_ids: $status_ids
          username: $username
          firstname: $firstname
          lastname: $lastname
          gender: $gender
          is_active: $is_active
          birth_date: $birth_date
          type_ids: $type_ids
          role_id: $role_id
          has_role_name: $has_role_name
          has_permission_name: $has_permission_name
          device_zones: $device_zones
          user_category_ids: $user_category_ids
          user_section: $user_section
          page: $page
          limit: $limit #for_admin: $for_admin
        ) {
          data {
            id
            firstname
            lastname
            cellphone
            media {
              id
              full_url
            }
            type {
              id
              title
            }
            roles
            all_roles {
              sites {
                id
                type {
                  id
                  title
                }
                title
              }
              role {
                id
                title
                name
              }
              workshops {
                id
                title
              }
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;

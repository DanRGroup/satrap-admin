import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'addSimpleUser',
    serviceName: 'shared',
    query: gql`
      mutation addSimpleUser(
        $password: String
        $firstname: String
        $lastname: String
        $national_code: String
        $birth_date: String
        $cellphone: String
        $address: String
        $email: String
        $gender: Int
        $is_active: Int
        $status_id: String
        $type_id: String
        $username: String
        $need_activation: Int # 0 , 1
        $user_category_title: String
        $user_category_id: String
      ) {
        addSimpleUser(
          password: $password
          firstname: $firstname
          lastname: $lastname
          national_code: $national_code
          birth_date: $birth_date
          cellphone: $cellphone
          address: $address
          email: $email
          gender: $gender
          is_active: $is_active
          status_id: $status_id
          type_id: $type_id
          username: $username
          need_activation: $need_activation
          user_category_title: $user_category_title
          user_category_id: $user_category_id
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'addUser',
    serviceName: 'unitadmin',
    query: gql`
      mutation addUser(
        $firstname: String
        $lastname: String
        $national_code: String
        $cellphone: String! # ده تا دوازده کارکتر
        $medical_number: String
        $gender: Int
        $address: String
        $email: String
        $is_active: Int
        $status_id: String
        $type_id: String
        $role_id: String
        $username: String
        $need_activation: Int # 0 , 1
        $user_category_title: String
        $user_category_id: String
      ) {
        addUser(
          firstname: $firstname
          lastname: $lastname
          national_code: $national_code
          cellphone: $cellphone
          address: $address
          email: $email
          gender: $gender
          is_active: $is_active
          status_id: $status_id
          type_id: $type_id
          role_id: $role_id
          username: $username
          need_activation: $need_activation
          user_category_title: $user_category_title
          user_category_id: $user_category_id
          medical_number: $medical_number
          specialist: $specialist
          insurance_type: $insurance_type
          financial_situation: $financial_situation
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

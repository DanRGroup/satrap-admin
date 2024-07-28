import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'users',
    serviceName: 'shared',
    query: gql`
      query users($ids: [String]) {
        users(ids: $ids) {
          data {
            firstname
            lastname
            address
            #cellphone
            tellphone
            birth_date
            national_code
            email
            gender
            details
            is_active
            type {
              id
              title
            }
            status {
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
    serviceName: 'shared',
    query: gql`
      mutation updateUser(
        $ids: [String]!
        $firstname: String
        $lastname: String
        $national_code: String
        $birth_date: String
        $tellphone: String
        $address: String
        $email: String
        $gender: Int
        $is_active: Int
        $status_id: String
        $type_id: String
      ) {
        updateUser(
          ids: $ids
          firstname: $firstname
          lastname: $lastname
          national_code: $national_code
          birth_date: $birth_date
          tellphone: $tellphone
          address: $address
          email: $email
          gender: $gender
          is_active: $is_active
          status_id: $status_id
          type_id: $type_id
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;

import { gql } from '@apollo/client';

const schema = {
  users: {
    name: 'users',
    serviceName: 'shared',
    query: gql`
      query {
        users {
          total
        }
      }
    `,
  },
  workshops: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query {
        workshop {
          total
        }
      }
    `,
  },
  sites: {
    name: 'site',
    serviceName: 'graphql',
    query: gql`
      query {
        site {
          total
        }
      }
    `,
  },
  tariffs: {
    name: 'tariff',
    serviceName: 'auth',
    query: gql`
      query {
        tariff {
          total
        }
      }
    `,
  },
  contract: {
    name: 'contract',
    serviceName: 'auth',
    query: gql`
      query contract($ids: [String]) {
        contract(ids: $ids) {
          data {
            id
            title
            contractual_number
            is_civil
            employer {
              firstname
              lastname
            }
            workshop {
              id
              title
            }
            media {
              id
              full_url
            }
            operation_type {
              id
              title
            }

            forecast_amount
            total_houre
            total_service
            total_tonnage
            progress
          }
          total
        }
      }
    `,
  },
};

export default schema;

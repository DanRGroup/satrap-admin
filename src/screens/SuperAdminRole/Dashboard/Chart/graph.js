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
};

export default schema;

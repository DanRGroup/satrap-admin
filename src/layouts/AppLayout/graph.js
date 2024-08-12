import { gql } from '@apollo/client';

const schema = {
  contractType: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String], $title: String) {
        contractType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  taskType: {
    name: 'taskType',
    serviceName: 'graphql',
    query: gql`
      query taskType($ids: [String], $title: String) {
        taskType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  taskStatus: {
    name: 'taskStatus',
    serviceName: 'graphql',
    query: gql`
      query taskStatus($ids: [String], $title: String) {
        taskStatus(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  operationType: {
    name: 'operationType',
    serviceName: 'graphql',
    query: gql`
      query operationType($ids: [String], $title: String) {
        operationType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  materialType: {
    name: 'materialType',
    serviceName: 'graphql',
    query: gql`
      query materialType($ids: [String], $title: String) {
        materialType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  shiftType: {
    name: 'shiftType',
    serviceName: 'graphql',
    query: gql`
      query shiftType($ids: [String], $title: String) {
        shiftType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  userStatus: {
    name: 'userStatus',
    serviceName: 'auth',
    query: gql`
      query userStatus($ids: [String], $title: String) {
        userStatus(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  siteType: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String], $title: String) {
        siteType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  vehicleType: {
    name: 'vehicleType',
    serviceName: 'graphql',
    query: gql`
      query vehicleType($ids: [String], $title: String) {
        vehicleType(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
  workshopStatus: {
    name: 'workshopStatus',
    serviceName: 'graphql',
    query: gql`
      query workshopStatus($ids: [String], $title: String) {
        workshopStatus(ids: $ids, title: $title) {
          data {
            id
            title
          }
        }
      }
    `,
  },
};

export default schema;

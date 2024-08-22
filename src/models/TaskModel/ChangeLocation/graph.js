import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle($ids: [String]) {
        vehicle(ids: $ids) {
          data {
            tracks {
              lat
              lng
            }
          }
        }
      }
    `,
  },
  update: {
    name: 'createVehicleTracking',
    serviceName: 'auth',
    query: gql`
      mutation createVehicleTracking($lat: String!, $lng: String!, $vehicle_id: String!) {
        createVehicleTracking(lat: $lat, lng: $lng, vehicle_id: $vehicle_id) {
          messages
        }
      }
    `,
  },
};

export default schema;

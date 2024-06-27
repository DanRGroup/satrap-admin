import { gql } from '@apollo/client';

const schema = {
  unassign: {
    name: 'deleteMedia',
    serviceName: 'labadmin',
    query: gql`
      mutation deleteMedia($id: String!, $model_name: String!, $media_ids: [String], $collection: String) {
        deleteMedia(id: $id, model_name: $model_name, media_ids: $media_ids, collection_name: $collection) {
          messages
        }
      }
    `,
  },
};

export default schema;

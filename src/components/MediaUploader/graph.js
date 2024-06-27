import { gql } from '@apollo/client';

const schema = {
  assign: {
    name: 'assignMedia',
    serviceName: 'auth',
    query: gql`
      mutation assignMedia(
        $id: String!
        $model_name: String!
        $media_ids: [String]
        $paths: [String]
        $collection_name: String
        $files: [Upload]
        $do_replace: Int
        $method: String
      ) {
        assignMedia(
          id: $id
          model_name: $model_name
          files: $files
          media_ids: $media_ids
          paths: $paths
          collection_name: $collection_name
          do_replace: $do_replace
          method: $method # COPY,MOVE
        ) {
          messages
          model_id
          model_name
          number_of_file
        }
      }
    `,
  },
};

export default schema;

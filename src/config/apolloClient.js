import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://satrap.hy2.ir/graphql',
  cache: new InMemoryCache(),
});

export default client;

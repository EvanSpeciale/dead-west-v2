import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import { endpoint } from '../config';

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

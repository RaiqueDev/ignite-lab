import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl5ch8hie03jy01uld2ei8whm/master',
  cache: new InMemoryCache()
})

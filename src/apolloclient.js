import { ApolloClient, InMemoryCache } from '@apollo/client'

// initialize a GraphQL client
export const client = new ApolloClient({
  // name: 'react-web-client',
  // version: '1.0.0',
  cache: new InMemoryCache(),
  uri:
    'https://dev-api.usbank.com/money-movement/payee-management/v1/inq/payee',
  connectToDevTools: true,
  headers: {
    Authorization: `Bearer nFA17lku4QFQMuqtvKAqHTBQR7rP`,
    routingKey: 'IT4'
  }
})

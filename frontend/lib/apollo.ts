import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
let enviroment = 'https://api-sa-east-1.graphcms.com/v2/cl4on3zxi0lg601xl8j4l3atc/master'
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: enviroment,
  }),
})
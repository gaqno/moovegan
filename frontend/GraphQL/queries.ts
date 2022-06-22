import { gql } from "@apollo/client";

export const GET_CLIENTS_QUERY = gql` 
  query MyQuery {
    clients {
      id
      name
      photo {
        url
      }
      posts {
        id
      }
      stars
      updatedAt
      publishedAt
    }
  }`

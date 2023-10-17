import gql from "graphql-tag"
export const SHOPE_PRODUCTS = gql`
query{
  products{
    id
  }
}
`
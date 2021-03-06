import { gql } from "@apollo/client";

export const FETCH_USEDITEMSBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
    }
  }
`;
export const FETCH_USEDITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      contents
      price
      tags
      images
      seller {
        name
      }
      createdAt
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_REVIEWS = gql`
  query fetchReviewBoards {
    fetchReviewBoards {
      id
      title
      review
      star
      like
      createdAt
      user {
        nickname
      }
      crewUserList {
        id
        crewBoard {
          id
          mountain {
            mountain
          }
        }
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_REVIEW = gql`
  query fetchReviewBoard($reviewBoardId: String!) {
    fetchReviewBoard(reviewBoardId: $reviewBoardId) {
      id
      title
      review
      star
      like
      user {
        id
        nickname
        profile_img
        gender
        birth
      }
      crewUserList {
        id
        crewBoard {
          id
          mountain {
            id
            mountain
          }
        }
      }
    }
  }
`;

export const FETCH_REVIEW_COMMENTS = gql`
  query fetchReviewComments($reviewBoardId: String!, $page: Int) {
    fetchReviewComments(reviewBoardId: $reviewBoardId, page: $page) {
      id
      reviewComment
      createdAt
      user {
        id
        nickname
        profile_img
      }
    }
  }
`;

export const DELETE_REVIEW_BOARD = gql`
  mutation deleteReviewBoard($reviewBoardId: String!) {
    deleteReviewBoard(reviewBoardId: $reviewBoardId)
  }
`;

export const FETCH_REVIEW_IMAGE = gql`
  query fetchReviewBoardImage($reviewBoardId: String!) {
    fetchReviewBoardImage(reviewBoardId: $reviewBoardId) {
      id
      imgUrl
    }
  }
`;

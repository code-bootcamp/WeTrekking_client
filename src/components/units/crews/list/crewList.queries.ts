import { gql } from "@apollo/client";

export const FETCH_CREW_BOARDS_LATEST = gql`
  query fetchCrewBoardsLatestFirst(
    $region: String!
    $startDate: String!
    $endDate: String!
    $search: String!
  ) {
    fetchCrewBoardsLatestFirst(
      region: $region
      startDate: $startDate
      endDate: $endDate
      search: $search
    ) {
      id
      title
      date
      dateTime
      peoples
      thumbnail
      mountain {
        id
        mountain
        address
      }
      user {
        id
        nickname
        profile_img
      }
      dibUsers {
        id
      }
      assignedUsers {
        id
        profile_img
      }
      createdAt
    }
  }
`;

export const FETCH_CREW_BOARDS_DEADLINE = gql`
  query fetchCrewBoardsDeadlineFirst(
    $region: String!
    $startDate: String!
    $endDate: String!
    $search: String!
  ) {
    fetchCrewBoardsDeadlineFirst(
      region: $region
      startDate: $startDate
      endDate: $endDate
      search: $search
    ) {
      id
      title
      date
      dateTime
      peoples
      thumbnail
      mountain {
        id
        mountain
        address
      }
      user {
        id
        nickname
        profile_img
      }
      dibUsers {
        id
      }
      assignedUsers {
        id
        profile_img
      }
      createdAt
    }
  }
`;
// export const FETCH_CREW_BOARDS_LATEST = gql`
//   query fetchCrewBoardsLatestFirst {
//     fetchCrewBoardsLatestFirst {
//       id
//       title
//       date
//       dateTime
//       peoples
//       createdAt
//       thumbnail
//       user {
//         id
//         nickname
//         profile_img
//       }
//     }
//   }
// `;

// export const FETCH_CREW_BOARDS_DEADLINE = gql`
//   query fetchCrewBoardsDeadlineFirst {
//     fetchCrewBoardsDeadlineFirst {
//       id
//       title
//       date
//       dateTime
//       peoples
//       createdAt
//       thumbnail
//       user {
//         id
//         nickname
//         profile_img
//       }
//     }
//   }
// `;

export const FETCH_BOARD_IMAGE = gql`
  query fetchBoardImage($crewBoardId: String!) {
    fetchBoardImage(crewBoardId: $crewBoardId) {
      id
      imgUrl
    }
  }
`;

export const FETCH_USER = gql`
  query {
    fetchUser {
      id
    }
  }
`;

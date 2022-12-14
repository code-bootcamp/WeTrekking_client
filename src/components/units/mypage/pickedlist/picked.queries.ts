import { gql } from "@apollo/client";

export const FETCH_DIBS = gql`
  query fetchDibs {
    fetchDibs {
      id
      user {
        id
        email
        name
        nickname
        birth
        phone
        gender
        profile_img
      }
      crewBoard {
        id
        title
        description
        date
        dateTime
        address
        addressDetail
        gender
        dues
        peoples
        thumbnail
        # mountain {
        #   mountain
        # }
        assignedUsers {
          id
          name
          nickname
          profile_img
        }
        createdAt
        user {
          id
          email
          name
          nickname
          birth
          phone
          gender
          profile_img
        }
      }
    }
  }
`;

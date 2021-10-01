import { gql } from "@apollo/client";

export const getAllQuestion = gql`
  query MyQuery {
    question {
      id
      question
      user_id
      title
      username
      tags {
        tag
        id
      }
    }
  }
`;

export const getQuestionDetailById = gql`
  query MyQuery($id: Int!) {
    question_by_pk(id: $id) {
      id
      code
      question
      title
      user_id
      username
      tags {
        id
        tag
      }
      answers {
        answer
        id
        user_id
      }
      question_comments {
        comment
        id
        user_id
        username
      }
    }
  }
`;

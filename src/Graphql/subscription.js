import { gql } from "@apollo/client";

export const getQuestionDetail = gql`
  subscription MySubscription($id: Int!) {
    question_by_pk(id: $id) {
      code
      id
      question
      title
      user_id
      username
      answers {
        answer
        code
        id
        user_id
      }
      tags {
        tag
        id
      }
    }
  }
`;

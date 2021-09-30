import { gql } from "@apollo/client";

export const insertAnswerWithQuestionId = gql`
  mutation MyMutation($object: answer_insert_input!) {
    insert_answer_one(object: $object) {
      id
    }
  }
`;

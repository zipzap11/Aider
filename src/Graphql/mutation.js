import { gql } from "@apollo/client";

export const insertAnswerWithQuestionId = gql`
  mutation MyMutation($object: answer_insert_input!) {
    insert_answer_one(object: $object) {
      id
    }
  }
`;

export const insertNewQuestion = gql`
  mutation MyMutation($object: question_insert_input = { code: "", tags: {} }) {
    insert_question_one(object: $object) {
      id
    }
  }
`;

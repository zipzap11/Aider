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

export const InsertNewQuestionComment = gql`
  mutation MyMutation($object: question_comments_insert_input!) {
    insert_question_comments_one(object: $object) {
      id
    }
  }
`;

export const InsertNewAnswerComment = gql`
  mutation MyMutation($object: answer_comments_insert_input!) {
    insert_answer_comments_one(object: $object) {
      id
    }
  }
`;

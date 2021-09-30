import { insertAnswerWithQuestionId } from "../Graphql/mutation";
import { gql, useMutation } from "@apollo/client";
import { getQuestionDetailById } from "../Graphql/query";

export function useSubmitAnswer(id) {
  const [
    submitAnswer,
    { loading: loadingSubmitAnswer, error: errorSubmitAnswer },
  ] = useMutation(insertAnswerWithQuestionId);
  return { submitAnswer, loadingSubmitAnswer, errorSubmitAnswer };
}

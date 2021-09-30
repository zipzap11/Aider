import { insertAnswerWithQuestionId } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

export function useSubmitAnswer() {
  const [submitAnswer, { loading: loadingSubmitAnswer }] = useMutation(
    insertAnswerWithQuestionId
  );
  return { submitAnswer, loadingSubmitAnswer };
}

import { useMutation } from "@apollo/client";
import { InsertNewAnswerComment } from "../Graphql/mutation";

export function useSubmitAnswerComment() {
  const [submitComment, { errorSubmitComment, loadingSubmitComment }] =
    useMutation(InsertNewAnswerComment);
  return { submitComment, errorSubmitComment, loadingSubmitComment };
}

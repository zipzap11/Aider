import { useMutation } from "@apollo/client";
import { insertNewQuestion } from "../Graphql/mutation";

export function useCreateQuestion() {
  const [
    createQuestion,
    { loading: loadingCreateQuestion, error: errorCreateQuestion },
  ] = useMutation(insertNewQuestion);
  return { createQuestion, loadingCreateQuestion, errorCreateQuestion };
}

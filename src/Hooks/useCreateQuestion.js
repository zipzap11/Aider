import { useMutation } from "@apollo/client";
import { insertNewQuestion } from "../Graphql/mutation";
import { GetAllQuestion } from "../Graphql/query";

export function useCreateQuestion() {
  const [
    createQuestion,
    { loading: loadingCreateQuestion, error: errorCreateQuestion },
  ] = useMutation(insertNewQuestion, {
    refetchQueries: [{ query: GetAllQuestion }],
  });
  return { createQuestion, loadingCreateQuestion, errorCreateQuestion };
}

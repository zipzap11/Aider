import { useMutation } from "@apollo/client";
import { DeleteQuestion } from "../Graphql/mutation";
import { GetAllQuestion, GetUserQuestions } from "../Graphql/query";

export function useDeleteQuestion(uid) {
  console.log("FROM USE DELETE QUESTION ", uid);
  const [
    deleteQuestion,
    { loading: loadingDeleteQuestion, error: errorDeleteQuestion },
  ] = useMutation(DeleteQuestion, {
    refetchQueries: [
      { query: GetUserQuestions, variables: { user_id: uid } },
      { query: GetAllQuestion },
    ],
  });

  return { deleteQuestion, loadingDeleteQuestion, errorDeleteQuestion };
}

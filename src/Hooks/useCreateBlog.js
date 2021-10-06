import { useMutation } from "@apollo/client";
import { CreateBlog } from "../Graphql/mutation";
import { GetBlogs } from "../Graphql/query";

export function useCreateBlog() {
  const [createblog, { error: errorCreateBlog, loading: loadingCreateBlog }] =
    useMutation(CreateBlog, {
      refetchQueries: [{ query: GetBlogs }],
    });
  return { createblog, errorCreateBlog, loadingCreateBlog };
}

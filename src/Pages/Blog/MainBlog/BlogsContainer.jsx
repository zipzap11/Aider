import React from "react";
import { useQuery } from "@apollo/client";
import { GetBlogs } from "../../../Graphql/query";
import classes from "./BlogsContainer.module.css";
import LoadingBlogCard from "../../../Components/Loading/LoadingBlogCard";
import BlogCard from "./BlogCard";

function BlogsContainer() {
  const { data, error, loading } = useQuery(GetBlogs);
  //   if (loading) return <p>loading...</p>;
  if (error) alert(error.message);
  console.log(data);
  return (
    <div className={classes.grid}>
      {loading && [1, 2, 3].map((e) => <LoadingBlogCard key={e} />)}
      {!loading &&
        data.blogs.map((blog) => {
          return (
            <BlogCard
              id={blog.id}
              key={blog.id}
              author={blog.author}
              image={blog.image}
              tags={blog.blog_tags}
              title={blog.title}
            />
          );
        })}
    </div>
  );
}

export default BlogsContainer;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./ui/PostCard";
import { getPosts } from "../store/actions/getActions";
import BasicPagination from "./ui/BasicPagination";
import Checkbox from "./ui/Checkbox";

function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.posts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts({ page }));
  }, [page]);

  return (
    <div>
      <div className="flex flex-col justify-center sm:flex-row mt-10">
        <Checkbox />
        <div className="">
          {posts?.map((el) => {
            return (
              <PostCard
                key={el?.id}
                title={el?.title}
                content={el?.body}
                userId={el?.userId}
                id={el?.id}
              />
            );
          })}
        </div>
      </div>
      <BasicPagination setPage={setPage} />
    </div>
  );
}

export default Posts;

import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAuthor, putPosts } from "../../store/actions/getActions";
import { deletePost } from "../../store/actions/deleteActions";

export default function PostCard({ userId, title, content, id }) {
  const [isMore, setIsMore] = useState(false);
  const dispatch = useDispatch();
  const author = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAuthor({ userId }));
  }, [userId]);

  const moreHandler = () => {
    setIsMore(!isMore);
  };

  const whichIsShowContent = () => {
    if (isMore) {
      return content;
    }
    return content.slice(0, 120);
  };

  const deleteHandler = () => {
    dispatch(deletePost(id));
  };

  const putHandler = () => {
    dispatch(putPosts(id));
  };
  return (
    <div className=" w-full bg-green-300 rounded mt-5 items-center ">
      <div id={id} className="">
        <section>
          <p className=" text-2xl font-bold "> {title}</p>
        </section>
        <p>{author.author}</p>

        <p>04.11.03</p>

        <div>
          {whichIsShowContent()}
          <div className="text-blue-600 cursor-pointer" onClick={moreHandler}>
            {!isMore ? <p> Читать дальше...</p> : <p>Скрыть</p>}
          </div>
        </div>

        <button
          onClick={putHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
        >
          Изменить
        </button>
        <button
          onClick={deleteHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

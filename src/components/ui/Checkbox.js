import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPosts, getUsers } from "../../store/actions/getActions";

function Checkbox() {
    const dispatch  = useDispatch()
    const users = useSelector((state) => state.post.users);

    useEffect(() => {
        dispatch(getUsers());
      }, []);

    function handleCategoryChange(id) {
        dispatch(getSelectedPosts({ id }));
      }


  return (
    <div>
      <p className="text-xl text-lime-800 ml-20">Фильтрация</p>
      <div className="">
        {users
          ? users?.map((el) => {
              return (
                <div key={el.id} id={el.id}>
                  <input
                    id="checkbox"
                    type="radio"
                    name="answer"
                    onChange={() => handleCategoryChange(el.id)}
                  />
                  <span className="text-xl text-black-800 p-10 ">
                    {el.name}
                  </span>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Checkbox;

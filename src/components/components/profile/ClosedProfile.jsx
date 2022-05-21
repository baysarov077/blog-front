import React, { useEffect, useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSub, deleteSub, fetchOneUser } from "../../../redux/fearutes/user";
import { loadBlog } from "../../../redux/reducers/Blog";
import { getImage } from "../../../redux/reducers/image";
import "./closedStyle.css";

const ClosedProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.imgReducer.users);
  const loader = useSelector((state) => state.imgReducer.loader);
  const blog = useSelector((state) => state.blogReducer.blog);
  const myId = localStorage.getItem("id");
  const arr = [];
  useEffect(() => {
    dispatch(getImage());
    dispatch(loadBlog());
    dispatch(fetchOneUser(id));
  }, [dispatch]);
  const subcriptionUser0 = user.find((item) => item);
  let temp = [];
  const testUser = user.forEach((element) => {
    if (element._id === id) {
      temp.push(element.subscrib.map((item) => item.subscribtion));
    }
  });
  const newArr = temp.find((item) => item);
  const [sub, setSub] = useState(true);
  const handleSubClosed = () => {
    dispatch(addSub(myId, id));
    setSub(false);
  };

  const handleUnSub = () => {
    dispatch(deleteSub(myId, id));
    setSub(true);
  };
  var buttonUnsubscribe = (
    <button className="button___closed" onClick={handleUnSub}>
      Отписаться
    </button>
  );
  blog.forEach((element) => {
    if (element.user === id) {
      arr.push(element);
    }
  });
  return (
    <>
      {!loader ? (
        <div className="main__div">
          <p>
            {user.map((item) => {
              if (item._id === id) {
                return (
                  <div className="return__user">
                    {item.img ? (
                      <div className="image__profile">
                        {" "}
                        <img
                          className="image__profile"
                          src={`http://localhost:8000/${item.img}`}
                        />
                      </div>
                    ) : (
                      <div className="image__profile">
                        <img
                          className="image__profile"
                          src={`https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png`}
                        />
                      </div>
                    )}
                    <p className="nick___name">
                      @{item.nickname}
                      <p className="subb">Подписчики {item.subscrib.length}</p>
                      <p className="subb">Подписки {item.subscript.length}</p>
                      <p className="subb">Блоги {arr.length}</p>
                    </p>
                  </div>
                );
              }
            })}
          </p>
          {sub ? (
            <button onClick={handleSubClosed} className="button___closed">
              Подписаться
            </button>
          ) : (
            buttonUnsubscribe
          )}

          <h1 id="lock">
            <BsLockFill /> Этот аккаунт закрыт
          </h1>
          <label className="label_closed" htmlFor="lock">
            Подпишитесь на этот аккаунт, что-бы смотреть публикуемые здесь блоги
          </label>
        </div>
      ) : (
        "loader"
      )}
    </>
  );
};

export default ClosedProfile;

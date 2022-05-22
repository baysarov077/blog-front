import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../redux/reducers/image";
import { Link, useParams } from "react-router-dom";
import { addSub, fetchUsers } from "../../redux/fearutes/user";

const TapeHeader = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const myId = useSelector((state) => state.auth.userId);
// поменял назване переменной, дабы не путалис и на 51 строке тоже
  const myIdLocal = localStorage.getItem("id");

  const userImg = useSelector((state) =>
    state.imgReducer.users.find((user) => user.img)
  );
  const userBlog = useSelector((state) => state.blogReducer.blog);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  if (!users) {
    return "loading...";
  }
  if (!userImg) {
    return "loading...";
  }


  const consilium = (user, myId) => {
    return user.subscrib.find((item) => item.subscribtion === myId);
  };
// сама функция

  return (
    <div className="tape_header_main">
      <div className="tape_header_blog">
        {userBlog.map((item) => {
          return users.map((user) => {
            if (item._id === id && item.user === user._id) {
              return (
                <div className="tape_profile_post" key={item._id}>
{myId === user._id ? (
                    <Link to={`/profile/${myId}`}>
                      <img
                        className=""
                        src={`http://localhost:8000/${user.img}`}
                      />
                      <div>
                        <span className="header__nickaname">
                          {user.nickname}
                        </span>
                      </div>
                    </Link>
                  ) : 
                  ({consilium(user, myId) ? (
                    <Link to={`/user/${user._id}`}>

                      <img
                        className=""
                        src={`http://localhost:8000/${user.img}`}
                      />
                      <div>
                        <span className="header__nickaname">
                          {user.nickname}
                        </span>
                      </div>
                    </Link>
                  ) : (

                    <>
                      {" "}
                      {user.profileStatus ? (
                        <Link to={`/closed/profile/${user._id}`}>
                          <img
                            className=""
                            src={`http://localhost:8000/${user.img}`}
                          />
                          <div>
                            <span className="header__nickaname">
                              {user.nickname}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <Link to={`/user/${user._id}`}>
                          <img
                            className=""
                            src={`http://localhost:8000/${user.img}`}
                          />
                          <div>
                            <span className="header__nickaname">
                              {user.nickname}
                            </span>
                          </div>
                        </Link>
                      )}){" "}
                    </>
// в общем тут сделал условие, если профиль закрыт и ты не подписан, кидает на закрытый профиль, я не знаю сработает или нет, потому что дени тоже сделал функцию тут, ее взял и поставил как первое условие
// Его условие: Если ты жмешь по своему профилю кидать на свой профиль, который в хидере, если фолс, идет моя функция
                  )}
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default TapeHeader;

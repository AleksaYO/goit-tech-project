import { useGetUsersQuery } from "../../redux/userApi";
import css from "./Main.module.css";
import { Cards } from "../Cards/Cards";
import { Link } from "react-router-dom";
import { PaginationBtn } from "../PaginationBtn/PagintationBtn";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";

let LIMIT = 6;

const Main = () => {
  const [limit, setLimit] = useState(LIMIT);
  let { data = [], isLoading } = useGetUsersQuery(limit);
  const [users, setUsers] = useState([]);
  const followingUsers = useSelector(user);

  const nextPage = () => {
    setLimit((prev) => prev + 6);
  };

  const filteredUsers = (flag) => {
    if (flag === "all") {
      setUsers(data);
    }
    if (flag === "follow") {
      setUsers(data.filter((obj) => !followingUsers.includes(obj.id)));
    }
    if (flag === "following") {
      setUsers(data.filter((obj) => followingUsers.includes(obj.id)));
    }
  };

  useEffect(() => {
    !isLoading && setUsers(data);
  }, [data, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={css["header"]}>
            <Link to="/">
              <button className={css["btn-back"]}>
                <span>GO BACK</span>
              </button>
            </Link>
            {data.length === 20 && (
              <div className={css["filter"]}>
                <button
                  onClick={() => filteredUsers("all")}
                  className={css["btn-back"]}
                >
                  All
                </button>
                <button
                  onClick={() => filteredUsers("follow")}
                  className={css["btn-back"]}
                >
                  Follow
                </button>
                <button
                  onClick={() => filteredUsers("following")}
                  className={css["btn-back"]}
                >
                  Following
                </button>
              </div>
            )}
          </div>

          <>
            <ul className={css.list}>
              {users.map((item) => {
                return <Cards key={item.id} user={item} />;
              })}
            </ul>
            {data.length !== 20 && (
              <PaginationBtn isLoading={isLoading} nextPage={nextPage} />
            )}
          </>
        </>
      )}
    </>
  );
};

export default Main;

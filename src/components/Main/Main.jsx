import { useGetUsersQuery } from "../../redux/userApi";
import css from "./Main.module.css";
import { Cards } from "../Cards/Cards";
import { Link } from "react-router-dom";
import { PaginationBtn } from "../PaginationBtn/PagintationBtn";
import { useState } from "react";

const Main = () => {
  let { data = [] } = useGetUsersQuery();
  const itemsPerPage = 9;
  const [loadedItems, setLoadedItems] = useState(itemsPerPage);

  const currentData = data.slice(0, loadedItems);

  const nexUsers = () => {
    setLoadedItems(loadedItems + itemsPerPage);
  };

  return (
    <>
      <div className={css["header"]}>
        <Link to="/">
          <button className={css["btn-back"]}>
            <span>GO BACK</span>
          </button>
        </Link>
        <div className={css["filter"]}>
          <button className={css["btn-back"]}>All</button>
          <button className={css["btn-back"]}>Follow</button>
          <button className={css["btn-back"]}>Following</button>
        </div>
      </div>
      {currentData && (
        <>
          <ul className={css.list}>
            {currentData.map((item) => {
              return <Cards key={item.id} user={item} />;
            })}
          </ul>
          {data.length > loadedItems && <PaginationBtn nexUsers={nexUsers} />}
        </>
      )}
    </>
  );
};

export default Main;

import { useGetUsersQuery } from "../../redux/userApi";
import css from "./Main.module.css";
import { Cards } from "../Cards/Cards";
import { Link } from "react-router-dom";
import { PaginationBtn } from "../PaginationBtn/PagintationBtn";
import { useState } from "react";

const PAGE = 1;
const TOTAL_PAGE = Math.ceil(20 / 6);

const Main = () => {
  const [page, setPage] = useState(PAGE);
  let { data = [] } = useGetUsersQuery(page);

  const nextPage = () => {
    if (page === TOTAL_PAGE) return;
    else setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    else setPage((prev) => prev - 1);
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

      <>
        <ul className={css.list}>
          {data.map((item) => {
            return <Cards key={item.id} user={item} />;
          })}
        </ul>
        <PaginationBtn prevPage={prevPage} nextPage={nextPage} />
      </>
    </>
  );
};

export default Main;

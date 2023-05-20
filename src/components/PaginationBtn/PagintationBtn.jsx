import css from "./Pagination.module.css";

export const PaginationBtn = ({ prevPage, nextPage, data }) => {
  return (
    <div className={css["pagination-box"]}>
      <button onClick={prevPage} className={css["btn-previous-page"]}>
        PREV PAGE
      </button>
      <button onClick={nextPage} className={css["btn-next-page"]}>
        NEXT PAGE
      </button>
    </div>
  );
};

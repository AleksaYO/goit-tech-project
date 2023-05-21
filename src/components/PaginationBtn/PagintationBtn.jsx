import css from "./Pagination.module.css";

export const PaginationBtn = ({ nextPage }) => {
  return (
    <div className={css["pagination-box"]}>
      <button onClick={nextPage} className={css["btn-next-page"]}>
        NEXT PAGE
      </button>
    </div>
  );
};

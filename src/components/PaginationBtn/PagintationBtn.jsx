import css from "./Pagination.module.css";

export const PaginationBtn = ({ nextPage, isLoading }) => {
  return (
    <div className={css["pagination-box"]}>
      <button
        disabled={isLoading}
        onClick={nextPage}
        className={css["btn-next-page"]}
      >
        LOAD MORE
      </button>
    </div>
  );
};

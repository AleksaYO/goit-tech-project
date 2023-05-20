import css from "../Main/Main.module.css";

export const PaginationBtn = ({ nexUsers }) => {
  return (
    <button onClick={nexUsers} className={css["btn-load-more"]}>
      Load More
    </button>
  );
};

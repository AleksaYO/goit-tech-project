import { useGetUsersQuery } from "../../redux/userApi";
import css from "./Main.module.css";
import { Cards } from "../Cards/Cards";

const Main = () => {
  const { data = [] } = useGetUsersQuery();

  return (
    data && (
      <ul className={css.list}>
        {data.map((item) => {
          return <Cards key={item.id} user={item} />;
        })}
      </ul>
    )
  );
};

export default Main;

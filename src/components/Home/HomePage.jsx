import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.home}>
      <p>This is home page</p>
      <p>To see all users, click on the button</p>
      <Link to="/cards">
        <button>
          <span>CARDS</span>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

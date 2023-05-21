import { lazy } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import css from "./components/Main/Main.module.css";

const Main = lazy(() => import("./components/Main/Main"));
const HomePage = lazy(() => import("./components/Home/HomePage"));

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

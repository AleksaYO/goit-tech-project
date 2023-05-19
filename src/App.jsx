import { lazy } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import css from "./components/Main/Main.module.css";

const Main = lazy(() => import("./components/Main/Main"));
const HomePage = lazy(() => import("./components/Home/HomePage"));
const NotFound = lazy(() => import("./components/NotFlound/NotFound"));

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

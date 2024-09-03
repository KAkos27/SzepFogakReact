import { Routes, Route } from "react-router-dom";

import NoPage from "../pages/NoPage/NoPage";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Router;

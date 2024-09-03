import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;

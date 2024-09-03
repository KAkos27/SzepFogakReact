import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import { routes } from "../../router/routes";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleModalState = (state) => {
    setOpen(state);
  };

  return (
    <>
      <span
        className="icon menu-button"
        onClick={() => handleModalState(true)}
      ></span>
      <div className="wrapper" onClick={() => handleModalState(false)}>
        <Modal
          className="nav"
          open={open}
          onEscape={() => handleModalState(false)}
        >
          <span
            className="icon close-button"
            onClick={() => handleModalState(false)}
          ></span>
          <div className="link-container">
            {routes.map((route) => (
              <Link key={route.id} to={route.path}>
                {route.title}
              </Link>
            ))}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Nav;

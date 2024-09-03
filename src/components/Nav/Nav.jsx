import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import closeButton from "../../assets/ui-images/close-button-black.svg";
import { routes } from "../../router/routes";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleModalState = (state) => {
    setOpen(state);
  };

  return (
    <>
      <span className="icon" onClick={() => handleModalState(true)}></span>
      <div className="wrapper" onClick={() => handleModalState(false)}>
        <Modal
          className="nav"
          open={open}
          onEscape={() => handleModalState(false)}
        >
          <img
            className="icon"
            src={closeButton}
            alt="Bezár"
            onClick={() => handleModalState(false)}
          />
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

import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import menuIcon from "../../assets/ui-images/control-bar-icon.svg";
import closeButton from "../../assets/ui-images/close-button-black.svg";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleModalState = () => {
    setOpen((prevSate) => !prevSate);
  };

  return (
    <>
      <img
        className="icon"
        src={menuIcon}
        alt="Menü"
        onClick={handleModalState}
      />
      <Modal className="nav" open={open}>
        <img
          className="icon"
          src={closeButton}
          alt="Bezár"
          onClick={handleModalState}
        />
        <Link to="/">Fogkő eltávolítás</Link>
        <Link to="/about">Profiflex sópolírozás</Link>
        <Link to="/contact">Ismerkedés a rendelővel</Link>
        <Link to="/contact">Barázdazárás</Link>
        <Link to="/contact">Szájhigiénes tanácsadás</Link>
        <Link to="/contact">Fogcsikorgatás gátló</Link>
        <Link to="/contact">Fognyaki érzékenység csökkentés</Link>
        <Link to="/contact">Fogékszer ragasztás</Link>
        <Link to="/contact">Fogfehérítés</Link>
      </Modal>
    </>
  );
};

export default Nav;

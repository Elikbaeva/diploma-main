import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const handleItemClick = () => {
    toggle(); // Toggle the drawer state when an item is clicked
  };

  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <button onClick={toggle} className="close-btn">X</button> {/* Close button */}
        <Logo />
        <Nav onItemClick={handleItemClick} />
      </div>
    </div>
  );
}

export default Drawer;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixedHead">
      <div style={{ padding: "0 1rem" }}>
        <div className="apphead">
          <div>
            <NavLink to="/">
              <h1>learnHub</h1>
            </NavLink>
          </div>
          <div>
            <NavLink to="/form">admin</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

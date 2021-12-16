import React, { useState } from "react";
// import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { FiMenu, FiX } from "react-icons/fi";

function NavigationBar(props) {
  const [opend, setOpen] = useState(false); //false = bars, true = times
  // handleClick을 하면
  const handleClick = () => {
    setOpen(!opend);
  };
  const resetClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={resetClick}>
        로고
      </Link>
      <ul className={opend ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={resetClick}>
            커뮤니티
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store" className="nav-link" onClick={resetClick}>
            스토어
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link" onClick={resetClick}>
            회원가입
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link" onClick={resetClick}>
            로그인
          </Link>
        </li>
      </ul>

      <div className="nav-icon" onClick={handleClick}>
        {opend ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default NavigationBar;

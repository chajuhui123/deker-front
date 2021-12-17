import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "../img/logo.png";

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
        <img src={logoImg} alt="로고" />
      </Link>
      <ul className={opend ? "nav-links active" : "nav-links"}>
        <div className="nav-left">
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
        </div>
        <div className="nav-right">
          <li>
            <form>
              <input placeholder="Search" className="nav-input" />
              <button className="nav-btn">
                <FiSearch />
              </button>
            </form>
          </li>
          <li>
            <MdShoppingBasket size="32" className="nav-basket" />
          </li>
          {/* 추후, 로그인 정보 불러와서 조건 걸 예정 */}
          <li className="nav-item">
            <Link to="/signup" className="nav-link" onClick={resetClick}>
              회원가입/
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" onClick={resetClick}>
              로그인
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">회원프로필</a>
          </li>
        </div>
      </ul>

      <div className="nav-icon" onClick={handleClick}>
        {opend ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default NavigationBar;

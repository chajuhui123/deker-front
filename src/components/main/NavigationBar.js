import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "../../img/logo.png";

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
    <nav className={classes.navbar}>
      <Link to="/" onClick={resetClick}>
        <img className={classes.navLogo} src={logoImg} alt="로고" />
      </Link>
      <ul className={opend ? classes.navLinks.active : classes.navLinks}>
        <div className={classes.navLeft}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink} onClick={resetClick}>
              커뮤니티
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/store" className={classes.navLink} onClick={resetClick}>
              스토어
            </Link>
          </li>
        </div>
        <div className={classes.navRight}>
          <li className={classes.navItem}>
            <form>
              <input placeholder="Search" className={classes.navInput} />
              <button className={classes.navBtn}>
                <FiSearch />
              </button>
            </form>
          </li>
          <li>
            <MdShoppingBasket size="32" className={classes.navBasket} />
          </li>
          {/* 추후, 로그인 정보 불러와서 조건 걸 예정 */}
          <li className={classes.navItem}>
            <Link to="/signup" className={classes.navLink} onClick={resetClick}>
              회원가입/
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/signin" className={classes.navLink} onClick={resetClick}>
              로그인
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              회원프로필
            </Link>
          </li>
        </div>
      </ul>

      <div className={classes.navIcon} onClick={handleClick}>
        {opend ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default NavigationBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "img/logo.png";
import { rootMenu } from "api/rootMenu";

function NavigationBar(props) {
  const [opend, setOpen] = useState(false); //false = bars, true = times
  const handleClick = () => {
    setOpen(!opend);
  };
  const resetClick = () => {
    setOpen(false);
  };
  const menuList = rootMenu.map((menu, index) => (
    <li key={index} className={classes.navItem}>
      <Link to={menu.key} className={classes.navLink} onClick={resetClick}>
        {menu.label}
      </Link>
    </li>
  ));

  // {opend} 하드코딩 영역 수정 필요
  // 로그인 권한에 따라 보이는 메뉴 구분
  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/" onClick={resetClick}>
          <img className={classes.navLogo} src={logoImg} alt="로고" />
        </Link>
        {!opend && (
          <ul className={classes.navLinks}>
            <div className={classes.navLeft}>{menuList}</div>

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
                <Link
                  to="/signup"
                  className={classes.navLink}
                  onClick={resetClick}
                >
                  회원가입
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link
                  to="/signin"
                  className={classes.navLink}
                  onClick={resetClick}
                >
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
        )}
        <div className={classes.navIcon} onClick={handleClick}>
          {opend ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {opend && (
        <ul className={classes.navLinks.active}>
          {menuList}
          {/* 추후, 로그인 정보 불러와서 조건 걸 예정 */}
          <li className={classes.navItem}>
            <Link to="/signup" className={classes.navLink} onClick={resetClick}>
              회원가입
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
        </ul>
      )}
    </>
  );
}

export default NavigationBar;

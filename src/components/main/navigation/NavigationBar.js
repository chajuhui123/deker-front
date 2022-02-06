import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "img/logo.png";
// import { rootMenu } from "api/rootMenu";
import SubNavigationBar from "./SubNavigationBar";
import NavigationUserItem from "./NavigationUserItem";

function NavigationBar(props) {
  const [opend, setOpen] = useState(false); //false = bars, true = times
  const [clickedMenu, setClickedMenu] = useState("");

  const handleOnFixMenu = () => {
    setOpen(!opend);
  };

  const clickOnMenu = (event) => {
    setOpen(false);
    setClickedMenu(event.target.innerText || null);
  };

  const MENU_DUMMY = {
    menu: [
      {
        menuName: "메인",
        menuUrl: "/nmb/cmm",
        subMenu: [
          {
            menuName: "메인",
            menuUrl: "/",
          },
          {
            menuName: "사진",
            menuUrl: "/",
          },
          { menuName: "팔로잉", menuUrl: "/" },
          { menuName: "맞춤", menuUrl: "/" },
        ],
      },
      {
        menuName: "커뮤니티",
        menuUrl: "/nmb/cmm",
        subMenu: [
          {
            menuName: "메인",
            menuUrl: "/",
          },
          {
            menuName: "사진",
            menuUrl: "/",
          },
          { menuName: "팔로잉", menuUrl: "/" },
          { menuName: "맞춤", menuUrl: "/" },
        ],
      },
      {
        menuName: "마켓",
        menuUrl: "/nmb/mkt",
        subMenu: [
          {
            menuName: "메인",
            menuUrl: "/",
          },
          {
            menuName: "장바구니",
            menuUrl: "/",
          },
          { menuName: "최근 본 상품", menuUrl: "/" },
        ],
      },
      {
        menuName: "최근 본 상품",
        menuUrl: "/nmb/mkt/get/recent-pro",
      },
    ],
  };

  const menuList = MENU_DUMMY.menu.map((menu, index) => (
    <li key={index} className={classes.navItem}>
      <Link to={menu.menuUrl} className={classes.navLink} onClick={clickOnMenu}>
        {menu.menuName}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/" onClick={clickOnMenu}>
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
              <NavigationUserItem clickOnMenu={clickOnMenu} />
            </div>
          </ul>
        )}
        <div className={classes.navIcon} onClick={handleOnFixMenu}>
          {opend ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {opend && (
        <ul className={classes.navLinks.active}>
          {menuList}
          <NavigationUserItem clickOnMenu={clickOnMenu} />
        </ul>
      )}

      {clickedMenu === "메인" && <SubNavigationBar />}
      {clickedMenu === "커뮤니티" && <SubNavigationBar />}
      {clickedMenu === "마켓" && <SubNavigationBar />}
    </>
  );
}

export default NavigationBar;

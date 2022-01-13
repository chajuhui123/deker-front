import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "img/logo.png";
import { rootMenu } from "api/rootMenu";
import SubNavigationBar from "./SubNavigationBar";
import NavigationUserItem from "./NavigationUserItem";

function NavigationBar(props) {
  const [opend, setOpen] = useState(false); //false = bars, true = times
  const [clickedMenu, setClickedMenu] = useState("");

  const handleOnFixMenu = () => {
    setOpen(!opend);
  };
  const clickOnMenu = e => {
    setOpen(false);
  };
  const menuList = rootMenu.map((menu, index) => (
    <li key={index} className={classes.navItem}>
      <Link to={menu.key} className={classes.navLink} onClick={clickOnMenu}>
        {menu.label}
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
    </>
  );
}

export default NavigationBar;

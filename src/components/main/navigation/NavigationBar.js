import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "img/logo.png";
import SubNavigationBar from "./SubNavigationBar";
import NavigationUserItem from "./NavigationUserItem";

function NavigationBar(props) {
  const [opend, setOpen] = useState(false); //false = bars, true = times
  const [clickedMenu, setClickedMenu] = useState("");

  const handleOnFixMenu = () => {
    setOpen(!opend);
  };

  const clickOnMenu = (event) => {
    const clickedMenuInnerText = event.target.innerText;
    setOpen(false);
    setClickedMenu(null);
    if (clickedMenuInnerText === "커뮤니티" || clickedMenuInnerText === "") {
      setClickedMenu("community");
    }
    if (clickedMenuInnerText === "마켓") {
      setClickedMenu("market");
    }
  };

  const MENU_DUMMY = {
    menu: [
      {
        menuName: "",
        menuImgUrl: "img/logo.png",
        menuUrl: "/community",
      },
      {
        menuName: "커뮤니티",
        menuImgUrl: "",
        menuUrl: "/community",
      },
      {
        menuName: "마켓",
        menuImgUrl: "",
        menuUrl: "/market",
      },
    ],
    subMenu: {
      community: [
        {
          menuName: "메인",
          menuUrl: "/community",
        },
        {
          menuName: "사진",
          menuUrl: "/community/photo",
        },
        {
          menuName: "맞춤",
          menuUrl: "/community/personal",
        },
        {
          menuName: "팔로잉",
          menuUrl: "/community/following",
        },
      ],

      market: [
        {
          menuName: "메인",
          menuUrl: "/market",
        },
        {
          menuName: "장바구니",
          menuUrl: "/market/cart",
        },
        {
          menuName: "최근본상품",
          menuUrl: "/market/view",
        },
      ],
    },
  };

  const menuList = MENU_DUMMY.menu.map((menu, index) => (
    <li key={index} className={classes.navItem}>
      <Link to={menu.menuUrl} className={classes.navLink} onClick={clickOnMenu}>
        {menu.menuImgUrl !== "" ? (
          // 추후 로고 이미지는 서버에서 넘어져 오는 imgUrl 로 src 변경
          <img className={classes.navLogo} src={logoImg} alt="로고" />
        ) : (
          <p>{menu.menuName}</p>
        )}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className={classes.navbar}>
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

      <SubNavigationBar navItem={MENU_DUMMY.subMenu[clickedMenu]} />
    </>
  );
}

export default NavigationBar;

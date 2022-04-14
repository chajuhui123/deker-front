import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiGift } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { postApi } from "api/fetch-api";
import { BASE_URL } from "module/common-module";
import NavWrite from "./NavWrite";
import classes from "./NavigationBar.module.css";
import MoreMenuToolTip from "./MoreMenuToolTip";
import SubNavigationBar from "./SubNavigationBar";

function NavigationBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const [menuImgUrl, setMenuImgUrl] = useState("");
  const [mainNavMenu, setMainNavMenu] = useState([]);
  const [subNavMenu, setSubNavMenu] = useState({});
  const [isMoreMenu, setIsMoreMenu] = useState(false);

  const pathName = location.pathname.slice(1, location.pathname.length);

  const mainNavMenuList = mainNavMenu.map((navItem, navItemIndex) => {
    return (
      <Link
        key={navItemIndex}
        to={navItem.menuUrl}
        className={classes.menuItem}
      >
        {!!navItem.menuImgUrl ? (
          <img
            className={classes.logoImg}
            src={`${BASE_URL}${menuImgUrl}`}
            alt="DEKER"
          />
        ) : (
          <div>{navItem.menuName}</div>
        )}
      </Link>
    );
  });

  const handleMoreMenu = () => {
    setIsMoreMenu(!isMoreMenu);
  };

  const getSubMenuItem = pathName => {
    if (pathName === "community") return subNavMenu.community;
    if (pathName === "market") return subNavMenu.market;
    return null;
  };

  const navigationBarCallBack = res => {
    console.log(res.data);
    if (!!res) {
      setMenuImgUrl(res.data.menuImgUrl);
      setMainNavMenu(res.data.menu);
      setSubNavMenu({
        community: res.data.subMenu.community,
        market: res.data.subMenu.market,
      });
    }
  };

  useEffect(() => {
    const navbarGetUrl = isLoggedIn
      ? "mb/cmm/get/nav-menu"
      : "nmb/cmm/get/nav-menu";
    dispatch(postApi(navbarGetUrl, null, navigationBarCallBack));
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <div className={classes.navBarDiv}>
        <div className={classes.navBarMenu}>{mainNavMenuList}</div>
        <div className={classes.navBarUserMenu}>
          {!isLoggedIn && (
            <>
              <Link to="/signin">로그인</Link>
              <Link to="/signup">회원가입</Link>
            </>
          )}
          {!!isLoggedIn && (
            <>
              <NavWrite />
              <BiGift
                className={classes.menuIcon}
                size={25}
                onClick={() => {
                  history.push("/mypresent");
                }}
              />
              <RiShoppingBasketLine
                className={classes.menuIcon}
                size={25}
                onClick={() => {
                  history.push("/market/cart");
                }}
              />
              <IoIosAddCircle
                className={classes.moreIcon}
                size={32}
                onClick={handleMoreMenu}
              />
            </>
          )}
        </div>
        {!!isMoreMenu && <MoreMenuToolTip handleMoreMenu={handleMoreMenu} />}
      </div>
      <SubNavigationBar navItem={getSubMenuItem(pathName)} />
    </>
  );
}

export default NavigationBar; //

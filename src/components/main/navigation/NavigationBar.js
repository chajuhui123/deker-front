import React, { useState, useEffect } from "react";
import classes from "./NavigationBar.module.css";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import NavWrite from "./NavWrite";
import MoreMenuToolTip from "./MoreMenuToolTip";
import SubNavigationBar from "./SubNavigationBar";
import { postApi } from "api/fetch-api";
import { BASE_URL } from "module/common-module";

function NavigationBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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

  const getSubMenuItems = (pathName) => {
    if (!!pathName.startsWith("community") || pathName === "")
      return subNavMenu.community;
    if (!!pathName.startsWith("market")) return subNavMenu.market;
    return null;
  };

  const navigationBarCallBack = (res) => {
    // console.log(res.data);
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
    setIsMoreMenu(false);
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
              <Link to="/account/signin">로그인</Link>
              <Link to="/account/signup">회원가입</Link>
            </>
          )}
          {!!isLoggedIn && (
            <>
              <NavWrite />
              {/* 선물하기 기능 업데이트 예정 */}
              {/* <BiGift
                className={classes.menuIcon}
                size={25}
                onClick={() => {
                  history.push("/mypresent");
                }}
              /> */}
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
      <SubNavigationBar navItem={getSubMenuItems(pathName)} />
    </>
  );
}

export default NavigationBar; //

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import classes from "./NavigationBar.module.css";
// import SubNavigationBar from "./SubNavigationBar";
// import NavigationUserItem from "./NavigationUserItem";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiGift } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { postApi } from "api/fetch-api";
import { BASE_URL } from "module/common-module";
import MoreMenuToolTip from "./MoreMenuToolTip";

function NavigationBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [menuImgUrl, setMenuImgUrl] = useState("");
  const [mainNavMenu, setMainNavMenu] = useState([]);
  const [subNavMenu, setSubNavMenu] = useState({});
  const [isMoreMenu, setIsMoreMenu] = useState(false);

  // const [opend, setOpen] = useState(false); //false = bars, true = times
  // const [clickedMenu, setClickedMenu] = useState("community");

  const handleMoreMenu = () => {
    setIsMoreMenu(!isMoreMenu);
  };

  const navigationBarCallBack = (res) => {
    if (!!res) {
      setMenuImgUrl(res.data.menuImgUrl);
      setMainNavMenu(res.data.menu);
      setSubNavMenu({
        community: res.data.subMenu.community,
        market: res.data.subMenu.market,
      });
    }
  };

  // const clickOnMenu = (event) => {
  //   const clickedMenuInnerText = event.target.innerText;
  //   setOpen(false);
  //   setClickedMenu(null);
  //   if (clickedMenuInnerText === "커뮤니티" || clickedMenuInnerText === "") {
  //     setClickedMenu("community");
  //   }
  //   if (clickedMenuInnerText === "마켓") {
  //     setClickedMenu("market");
  //   }
  // };

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

  useEffect(() => {
    const navbarGetUrl = isLoggedIn
      ? "mb/cmm/get/nav-menu"
      : "nmb/cmm/get/nav-menu";
    dispatch(postApi(navbarGetUrl, null, navigationBarCallBack));
  }, [dispatch, isLoggedIn]);

  return (
    // <>
    //   <nav className={classes.navbar}>
    //     {!opend && (
    //       <ul className={classes.navLinks}>
    //         <div className={classes.navLeft}>{menuList}</div>
    //         <div className={classes.navRight}>
    //           <li className={classes.navItem}>
    //             <form>
    //               <input placeholder="Search" className={classes.navInput} />
    //               <button className={classes.navBtn}>
    //                 <FiSearch />
    //               </button>
    //             </form>
    //           </li>
    //           <li>
    //             <MdShoppingBasket size="32" className={classes.navBasket} />
    //           </li>
    //           <NavigationUserItem clickOnMenu={clickOnMenu} />
    //         </div>
    //       </ul>
    //     )}
    //     {/* <div className={classes.navIcon} onClick={handleOnFixMenu}> */}
    //     <div className={classes.navIcon}>{opend ? <FiX /> : <FiMenu />}</div>
    //   </nav>

    //   {opend && (
    //     <ul className={classes.navLinks.active}>
    //       {menuList}
    //       <NavigationUserItem clickOnMenu={clickOnMenu} />
    //     </ul>
    //   )}

    //   <SubNavigationBar navItem={MENU_DUMMY.subMenu[clickedMenu]} />
    // </>
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
  );
}

export default NavigationBar; //

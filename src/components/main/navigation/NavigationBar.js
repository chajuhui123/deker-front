import React, { useState } from "react";
import classes from "./NavigationBar.module.css";
import logoImg from "img/logo.png";
import SubNavigationBar from "./SubNavigationBar";
import NavigationUserItem from "./NavigationUserItem";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { postApi } from "api/fetch-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BASE_URL } from "module/common-module";

function NavigationBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [mainNavMenu, setMainNavMenu] = useState([]);
  const [subNavMenu, setSubNavMenu] = useState({});
  const [isMoreMenu, setIsMoreMenu] = useState(false);

  const [opend, setOpen] = useState(false); //false = bars, true = times
  const [clickedMenu, setClickedMenu] = useState("community");

  const handleMoreMenu = () => {
    setIsMoreMenu(!isMoreMenu);
  };

  const navigationBarCallBack = (res) => {
    if (!!res) {
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
            src={`${BASE_URL}${navItem.menuImgUrl}`}
            alt="DEKER"
          />
        ) : (
          <div>{navItem.menuName}</div>
        )}
      </Link>
    );
  });

  useEffect(() => {
    const navbarGetUrl = isLoggedIn ? "mb/" : "nmb/";
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
        <RiShoppingBasketLine size={25} className={classes.basketIcon} />
        <Link to="/signin">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <div onClick={handleMoreMenu}>더보기</div>
      </div>
      {!!isMoreMenu && (
        <div className={classes.moreMenuToolTip}>
          <div>글쓰기</div>
          <div>마이페이지</div>
          <div>나의쇼핑</div>
          <div>나의선물함</div>
          <div>회원정보수정</div>
          <div>로그아웃</div>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;

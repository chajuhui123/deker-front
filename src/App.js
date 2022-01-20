import { useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import NavigationBar from "components/main/navigation/NavigationBar";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import MyPresentPage from "./pages/MyPresentPage";
import MyReviewPage from "./pages/MyReviewPage";
import Footer from "components/main/footer/Footer";
import SignupPage from "./pages/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "./store/modal-slice";
import ModalPopup from "components/common/modal";
import AccountMyPage from "pages/accountMyPage";
import ModifyUserInfoPage from "pages/ModifyUserInfoPage";
import SignupAddPage from "pages/SignupAddPage";
import AccountMyShoppingPage from "pages/accountMyShoppingPage";
import ModalTest from "pages/modalTest";
import CreateCommunityPage from "pages/CreateCommunityPage";
import ProductDetailPage from "pages/shop/ProductDetail";
import { calculateRemainingTime } from "api/check";
import { userAction } from "store/user-slice";
import StoreMainPage from "pages/StoreMainPage";

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);
  const dispatch = useDispatch();
  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  const retrieveStoredToken = useCallback(() => {
    const storedExpirationTime = localStorage.getItem("expirationTime");
    const remainingTime = calculateRemainingTime(storedExpirationTime);
    console.log(remainingTime);
    if (remainingTime <= 60000) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      dispatch(userAction.logout());
    }
  }, [dispatch]);

  useEffect(() => {
    retrieveStoredToken();
  }, [retrieveStoredToken]);

  return (
    <>
      <ModalPopup
        id={modalId}
        isOpen={isOpen}
        onRequestClose={closeModalEventHandler}
      >
        {modalCont}
      </ModalPopup>
      <NavigationBar />
      <div className={classes.content}>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/signup" exact>
            <div>
              <SignupPage />
            </div>
          </Route>
          <Route path="/oauth/kakao" component={KakaoAuth} exact></Route>
          <Route path="/signin" exact>
            <div>
              <SigninPage />
            </div>
          </Route>
          <Route path="/signupAdd" exact>
            <div>
              <SignupAddPage />
            </div>
          </Route>
          <Route path="/AccountMyPage" exact>
            <div>
              <AccountMyPage />
            </div>
          </Route>
          <Route path="/modifyUserInfo" exact>
            <div>
              <ModifyUserInfoPage />
            </div>
          </Route>
          <Route path="/accountMyShopping" exact>
            <div>
              <AccountMyShoppingPage />
            </div>
          </Route>
          <Route path="/modifyPassword" exact>
            <div>
              <ModifyPasswordPage />
            </div>
          </Route>
          <Route path="/myPresent" exact>
            <div>
              <MyPresentPage />
            </div>
          </Route>
          <Route path="/myReview" exact>
            <div>
              <MyReviewPage />
            </div>
          </Route>
          <Route path="/createCommunity" exact>
            <CreateCommunityPage />
          </Route>
          <Route path="/modalTest" exact>
            <ModalTest />
          </Route>
          <Route path="/storeMain" exact>
            <StoreMainPage />
          </Route>
          {/* no 로 product Detail 페이지 번호 받아올 예정 */}
          <Route path="/productDetail/:no" exact>
            <ProductDetailPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

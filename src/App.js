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
import CreateCommunityPage from "pages/community/CreateCommunityPage";
import ProductDetailPage from "pages/shop/ProductDetail";
import { calculateRemainingTime } from "api/check";
import { userAction } from "store/user-slice";
import StoreMainPage from "pages/shop/StoreMainPage";
import LoadingSpinner from "components/common/LoadingSpinner";
import { spinnerAction } from "store/spinner-slice";
import StoreSortPage from "pages/shop/StoreSortPage";
import CommunityDetailPage from "pages/community/communityDetailPage";
import MarketCartPage from "pages/shop/cart/marketCartPage";
import CommunityMainPage from "pages/community/CommunityMainPage";
import CommunitySemiPage from "components/community/semi/CommunitySemiPage";
import PaymentCmpltPage from "pages/shop/paymentCmpltPage";
import PaymentPage from "pages/shop/paymentPage";

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const top = useSelector((state) => state.modal.top);
  const left = useSelector((state) => state.modal.left);
  const dispatch = useDispatch();

  const spinnerStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "0px",
      padding: "0px",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "translate!important",
      zIndex: "1000",
    },

    overlay: {
      backgroundColor: "rgb(0 0 0 / 50%)",
    },
  };

  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  const closeSpinnerHandler = () => {
    dispatch(spinnerAction.complete());
  };

  const retrieveStoredToken = useCallback(() => {
    const storedExpirationTime = localStorage.getItem("extTokenTime");
    if (!!storedExpirationTime) {
      const remainingTime = calculateRemainingTime(storedExpirationTime);
      if (remainingTime <= 60000) {
        localStorage.removeItem("token");
        localStorage.removeItem("extTokenTime");
        dispatch(userAction.logout());
      } else {
        const jwtToken = localStorage.getItem("token");
        dispatch(userAction.login({ jwtToken }));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    retrieveStoredToken();
  }, [retrieveStoredToken]);

  return (
    <div className={classes.normalView}>
      <ModalPopup
        id={modalId}
        isOpen={isOpen}
        top={top}
        left={left}
        onRequestClose={closeModalEventHandler}
      >
        {modalCont}
      </ModalPopup>
      <ModalPopup
        id="spinner"
        isOpen={isLoading}
        spinnerStyle={spinnerStyle}
        onRequestClose={closeSpinnerHandler} // TODO : 삭제 해야함
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <LoadingSpinner />
        </div>
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
          <Route path="/signup/additional" exact>
            <div>
              <SignupAddPage />
            </div>
          </Route>
          <Route path="/mypage" exact>
            <div>
              <AccountMyPage />
            </div>
          </Route>
          <Route path="/mypage/modify" exact>
            <div>
              <ModifyUserInfoPage />
            </div>
          </Route>
          <Route path="/myShopping" exact>
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
          <Route path="/community" exact>
            <CommunityMainPage />
          </Route>
          <Route
            path="/community/semi/:type"
            exact
            component={CommunitySemiPage}
          ></Route>
          <Route path="/community/write" exact>
            <CreateCommunityPage />
          </Route>
          <Route path="/modalTest" exact>
            <ModalTest />
          </Route>
          <Route path="/market" exact>
            <StoreMainPage />
          </Route>
          <Route path="/market/cart" exact>
            <MarketCartPage />
          </Route>
          <Route
            path="/market/storeSortPage/:sortId"
            exact
            component={StoreSortPage}
          ></Route>
          <Route path="/payment" exact>
            <PaymentPage />
          </Route>
          <Route path="/paymentCmplt" exact>
            <PaymentCmpltPage />
          </Route>
          <Route
            path="/market/detail/:productId"
            exact
            component={ProductDetailPage}
          />
          <Route
            path="/community/detail/:postId"
            exact
            component={CommunityDetailPage}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

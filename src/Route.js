import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import KakaoAuth from "./oauth/kakao";
import ModalTest from "pages/modalTest";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "pages/common/NotFound";
import SignupAddPage from "pages/SignupAddPage";
import MyReviewPage from "./pages/MyReviewPage";
import PaymentPage from "pages/shop/paymentPage";
import MyPresentPage from "./pages/MyPresentPage";
import StoreMainPage from "pages/shop/StoreMainPage";
import StoreSortPage from "pages/shop/StoreSortPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import AccountMyPage from "pages/account/accountMyPage";
import ProductDetailPage from "pages/shop/ProductDetail";
import ModifyUserInfoPage from "pages/ModifyUserInfoPage";
import PaymentCmpltPage from "pages/shop/paymentCmpltPage";
import AlarmMain from "components/account/alarm/AlarmMain";
import MarketCartPage from "pages/shop/cart/marketCartPage";
import RestrictRoute from "components/common/RestrictRoute";
import AcctFllwngPage from "pages/account/accountFollowingPage";
import CommunityMainPage from "pages/community/CommunityMainPage";
import ModifyCommunityPage from "pages/community/ModifyCommunityPage";
import CreateCommunityPage from "pages/community/CreateCommunityPage";
import CommunityDetailPage from "pages/community/communityDetailPage";
import OneToOneQuestionPage from "pages/account/oneToOneQuestionPage";
import MarketRecentlyViewPage from "pages/shop/MarketRecentlyViewPage";
import RecentlyProduct from "components/shop/recently/RecentlyProduct";
import AccountMyShoppingPage from "pages/account/accountMyShoppingPage";
import CommunitySemiPage from "components/community/semi/CommunitySemiPage";
import RegistrationProductPage from "pages/shop/registrationProduct/main/registrationProductPage";

function RouteComponent() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const RedriectMain = () => <Redirect to="/" />;
  return (
    <Switch>
      <Route path="/" component={CommunityMainPage} exact />
      <RestrictRoute
        path="/signup"
        exact
        isLoggedIn={isLoggedIn}
        component={SignupPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/signup/additional"
        exact
        isLoggedIn={isLoggedIn}
        component={SignupAddPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/signin"
        exact
        isLoggedIn={isLoggedIn}
        component={SigninPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/oauth/kakao"
        exact
        isLoggedIn={isLoggedIn}
        component={KakaoAuth}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/mypage"
        exact
        isLoggedIn={!isLoggedIn}
        component={AccountMyPage}
        fallback={RedriectMain}
      />
      <Route
        path="/mypage/following"
        exact
        isLoggedIn={!isLoggedIn}
        component={AcctFllwngPage}
        fallback={RedriectMain}
      />
      <Route
        path="/mypage/follower"
        exact
        isLoggedIn={!isLoggedIn}
        component={AcctFllwngPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/mypage/modify"
        exact
        isLoggedIn={!isLoggedIn}
        component={ModifyUserInfoPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/myShopping"
        exact
        isLoggedIn={!isLoggedIn}
        component={AccountMyShoppingPage}
        fallback={RedriectMain}
      />
      <Route path="/modifyPassword" component={ModifyPasswordPage} exact />
      <Route path="/mypresent" component={MyPresentPage} exact />
      <RestrictRoute
        path="/question"
        exact
        isLoggedIn={!isLoggedIn}
        component={OneToOneQuestionPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/myReview"
        exact
        isLoggedIn={!isLoggedIn}
        component={MyReviewPage}
        fallback={RedriectMain}
      />
      <Route path="/myAlarm" exact>
        <AlarmMain />
      </Route>
      <Route path="/community" component={CommunityMainPage} exact />
      <Route
        path="/community/semi/:type"
        exact
        component={CommunitySemiPage}
      ></Route>
      <Route path="/community/write" component={CreateCommunityPage} exact />
      <Route
        path="/community/mod/:communityPostId"
        exact
        component={ModifyCommunityPage}
      ></Route>
      <Route path="/modalTest" exact>
        <ModalTest />
      </Route>
      <Route path="/market" component={StoreMainPage} exact />
      <Route path="/market/cart" component={MarketCartPage} exact />
      <Route path="/market/view" component={MarketRecentlyViewPage} exact />
      <Route
        path="/market/storeSortPage/:sortId"
        exact
        component={StoreSortPage}
      ></Route>
      <Route path="/payment" component={PaymentPage} exact />
      <Route path="/payment/paymentCmplt" component={PaymentCmpltPage} exact />
      <Route
        path="/market/detail/:productId"
        exact
        component={ProductDetailPage}
      />
      <Route
        path="/community/detail/:communityPostId"
        exact
        component={CommunityDetailPage}
      />
      <Route path="/market/recently" exact>
        <RecentlyProduct />
      </Route>
      <Route
        path="/market/registration-product"
        exact
        component={RegistrationProductPage}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouteComponent;

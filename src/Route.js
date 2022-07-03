import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import ModalTest from "pages/test/modalTest";
import SigninPage from "./pages/account/signin/SigninPage";
import SignupPage from "./pages/account/signup/SignupPage";
import NotFound from "pages/common/NotFound";
import SignupAddPage from "pages/account/signupadd/SignupAddPage";
import MyReviewPage from "./pages/account/myreview/MyReviewPage";
import PaymentPage from "pages/shop/paymentPage";
import MyPresentPage from "./pages/account/mypresent/MyPresentPage";
import StoreMainPage from "pages/shop/StoreMainPage";
import StoreSortPage from "pages/shop/StoreSortPage";
import AccountMyPage from "pages/account/mypage/accountMyPage";
import ProductDetailPage from "pages/shop/ProductDetail";
import ModifyUserInfoPage from "pages/account/mypage/modify/ModifyUserInfoPage";
import ModifyPassword from "pages/account/modfiypw/modifyPassword";
import PaymentCmpltPage from "pages/shop/paymentCmpltPage";
import AlarmMain from "components/account/alarm/AlarmMain";
import MarketCartPage from "pages/shop/cart/marketCartPage";
import RestrictRoute from "components/common/RestrictRoute";
import AcctFllwngPage from "pages/account/mypage/follow/accountFollowingPage";
import CommunityMainPage from "pages/community/CommunityMainPage";
import ModifyCommunityPage from "pages/community/ModifyCommunityPage";
import CreateCommunityPage from "pages/community/CreateCommunityPage";
import CommunityDetailPage from "pages/community/communityDetailPage";
import OneToOneQuestionPage from "pages/account/oneToOneQuestionPage";
import MarketRecentlyViewPage from "pages/shop/MarketRecentlyViewPage";
import RecentlyProduct from "components/shop/recently/RecentlyProduct";
import AccountMyShoppingPage from "pages/account/myshopping/accountMyShoppingPage";
import CommunitySemiPage from "components/community/semi/CommunitySemiPage";

import RegistrationProductItemPage from "pages/shop/registration/main/registrationProductItemsPage";
import RegistrationProductPage from "pages/shop/registration/admin/registrationProductPage";
import OneToOneQuestionWritePage from "pages/account/oneToOneQuestionWritePage";
import OneToOneAnswerPage from "pages/account/oneToOneAnswerPage";


function RouteComponent() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const RedriectMain = () => <Redirect to="/" />;
  return (
    <Switch>
      <Route path="/" component={CommunityMainPage} exact />
      <RestrictRoute
        path="/account/signup"
        exact
        isLoggedIn={isLoggedIn}
        component={SignupPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/account/signupadd"
        exact
        isLoggedIn={isLoggedIn}
        component={SignupAddPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/account/signin"
        exact
        isLoggedIn={isLoggedIn}
        component={SigninPage}
        fallback={RedriectMain}
      />
      {/* <RestrictRoute
        path="/oauth/kakao"
        exact
        isLoggedIn={isLoggedIn}
        component={KakaoAuth}
        fallback={RedriectMain}
      /> */}
      <RestrictRoute
        path="/account/mypage"
        exact
        isLoggedIn={!isLoggedIn}
        component={AccountMyPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/account/mypage/modify"
        exact
        isLoggedIn={!isLoggedIn}
        component={ModifyUserInfoPage}
        fallback={RedriectMain}
      />
      <Route
        path="/account/mypage/follower"
        exact
        isLoggedIn={!isLoggedIn}
        component={AcctFllwngPage}
        fallback={RedriectMain}
      />
      <Route
        path="/account/mypage/following"
        exact
        isLoggedIn={!isLoggedIn}
        component={AcctFllwngPage}
        fallback={RedriectMain}
      />
      <RestrictRoute
        path="/account/myshopping"
        exact
        isLoggedIn={!isLoggedIn}
        component={AccountMyShoppingPage}
        fallback={RedriectMain}
      />
      <Route path="/account/modfiypw" component={ModifyPassword} exact />
      <Route path="/account/mypresent" component={MyPresentPage} exact />
      <Route
        path="/question"
        exact
        // isLoggedIn={!isLoggedIn}
        component={OneToOneQuestionPage}
        // fallback={RedriectMain}
      />
      <Route
        path="/question/write"
        exact
        // isLoggedIn={!isLoggedIn}
        component={OneToOneQuestionWritePage}
        // fallback={RedriectMain}
      />
      <Route
        path="/questionAnswer"
        exact
        // isLoggedIn={!isLoggedIn}
        component={OneToOneAnswerPage}
        // fallback={RedriectMain}
      />
      <Route
        path="/account/myreview"
        exact
        isLoggedIn={!isLoggedIn}
        component={MyReviewPage}
        fallback={RedriectMain}
      />
      {/* <Route path="/myAlarm" exact>
        <AlarmMain />
      </Route> */}
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
        path="/market/registration-product/main"
        exact
        component={RegistrationProductItemPage}
      />
      <Route
        path="/market/registration-product/admin"
        exact
        component={RegistrationProductPage}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouteComponent;

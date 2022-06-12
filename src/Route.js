import React from "react";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import MyPresentPage from "./pages/MyPresentPage";
import MyReviewPage from "./pages/MyReviewPage";
import SignupPage from "./pages/SignupPage";
import ModifyUserInfoPage from "pages/ModifyUserInfoPage";
import SignupAddPage from "pages/SignupAddPage";
import ModalTest from "pages/modalTest";
import CreateCommunityPage from "pages/community/CreateCommunityPage";
import ProductDetailPage from "pages/shop/ProductDetail";
import StoreMainPage from "pages/shop/StoreMainPage";
import StoreSortPage from "pages/shop/StoreSortPage";
import CommunityDetailPage from "pages/community/communityDetailPage";
import MarketCartPage from "pages/shop/cart/marketCartPage";
import CommunityMainPage from "pages/community/CommunityMainPage";
import CommunitySemiPage from "components/community/semi/CommunitySemiPage";
import PaymentCmpltPage from "pages/shop/paymentCmpltPage";
import PaymentPage from "pages/shop/paymentPage";
import RecentlyProduct from "components/shop/recently/RecentlyProduct";
import RestrictRoute from "components/common/RestrictRoute";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AcctFllwngPage from "pages/account/accountFollowingPage";
import AccountMyPage from "pages/account/accountMyPage";
import AccountMyShoppingPage from "pages/account/accountMyShoppingPage";
import ModifyCommunityPage from "pages/community/ModifyCommunityPage";
import AlarmMain from "components/account/alarm/AlarmMain";
import MarketRecentlyViewPage from "pages/shop/MarketRecentlyViewPage";
import NotFound from "pages/common/NotFound";
import OneToOneQuestion from "pages/account/oneToOneQuestion";

function RouteComponent() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const RedriectMain = () => <Redirect to="/" />;
  return (
    <Switch>
      <Route path="/" exact>
        <div>
          <CommunityMainPage />
        </div>
      </Route>
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
      <RestrictRoute
        path="/question"
        exact
        isLoggedIn={!isLoggedIn}
        component={OneToOneQuestion}
        fallback={RedriectMain}
      />
      <Route path="/modifyPassword" exact>
        <div>
          <ModifyPasswordPage />
        </div>
      </Route>
      <Route path="/mypresent" exact>
        <div>
          <MyPresentPage />
        </div>
      </Route>
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
      <Route
        path="/community/mod/:communityPostId"
        exact
        component={ModifyCommunityPage}
      ></Route>
      <Route path="/modalTest" exact>
        <ModalTest />
      </Route>
      <Route path="/market" exact>
        <StoreMainPage />
      </Route>
      <Route path="/market/cart" exact>
        <MarketCartPage />
      </Route>
      <Route path="/market/view" exact>
        <MarketRecentlyViewPage />
      </Route>
      <Route
        path="/market/storeSortPage/:sortId"
        exact
        component={StoreSortPage}
      ></Route>
      <Route path="/payment" exact>
        <PaymentPage />
      </Route>
      <Route path="/payment/paymentCmplt" exact>
        <PaymentCmpltPage />
      </Route>
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
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouteComponent;

import { Route, Switch } from "react-router-dom";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import MyPresentPage from "./pages/MyPresentPage";
import MyReviewPage from "./pages/MyReviewPage";
import SignupPage from "./pages/SignupPage";
import AccountMyPage from "pages/accountMyPage";
import ModifyUserInfoPage from "pages/ModifyUserInfoPage";
import SignupAddPage from "pages/SignupAddPage";
import AccountMyShoppingPage from "pages/accountMyShoppingPage";
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

function RouteComponent() {
  return (
    <Switch>
      <Route path="/" exact>
        <div>
          <CommunityMainPage />
        </div>
      </Route>
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
      <Route path="/market/recently" exact>
        <RecentlyProduct />
      </Route>
    </Switch>
  );
}

export default RouteComponent;

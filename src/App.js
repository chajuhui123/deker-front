import { Route, Switch } from "react-router-dom";

import classes from "./App.module.css";

import NavigationBar from "./components/main/NavigationBar";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import MyPresentPage from "./pages/MyPresentPage";
import MyReviewPage from "./pages/MyReviewPage";
import Footer from "./components/main/Footer";

import SignupPage from "./pages/SignupPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalAction } from "./store/modal-slice";
import ModalPopup from "./components/common/modal";
import AccountMyPage from "./pages/accountMyPage";
import ModifyUserInfoPage from "./pages/ModifyUserInfoPage";
import SignupAddPage from "./pages/SignupAddPage";
import AccountMyShoppingPage from "./pages/accountMyShoppingPage";
import ModalTest from "./pages/modalTest";

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);
  const dispatch = useDispatch();
  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

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
          <Route path="/modalTest" exact>
            <ModalTest />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

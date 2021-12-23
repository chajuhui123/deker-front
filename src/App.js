import { Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import classes from "./App.module.css";

import { Layout, Breadcrumb } from "antd";
import NavigationBar from "./navigation/NavigationBar";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";

import SignupAdditional from "./pages/signupAdditional";
import ModifyUserInfo from "./pages/modifyUserInfo";
import SignupPage from "./pages/SignupPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalAction } from "./store/modal-slice";
import ModalPopup from "./components/common/modal";

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
      <Layout className={classes.layout}>
        <Layout.Header style={{ background: "white" }}></Layout.Header>
        <Layout.Content className={classes.content}>
          <Switch>
            <Route path="/" exact>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content</div>
            </Route>
            <Route path="/signup" exact>
              <div className="site-layout-content">
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
              <div className="site-layout-content">
                <SignupAdditional />
              </div>
            </Route>
            <Route path="/modifyUserInfo" exact>
              <div className="site-layout-content">
                <ModifyUserInfo />
              </div>
            </Route>
            <Route path="/modifyPassword" exact>
              <div>
                <ModifyPasswordPage />
              </div>
            </Route>
          </Switch>
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </>
  );
}

export default App;

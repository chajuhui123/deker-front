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
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalAction } from "./store/modal-slice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const openModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ modalId: "test", isOpen: true }));
  };
  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ modalId: "test", isOpen: false }));
  };
  return (
    <>
      <button
        onClick={openModalEventHandler}
        style={{ position: "absolute", opacity: 0 }}
      ></button>
      <ReactModal isOpen={isOpen} style={customStyles}>
        <SignupPage />
        <button onClick={closeModalEventHandler}>X</button>
      </ReactModal>
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

import { Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";

import { Layout, Breadcrumb } from "antd";
import NavigationBar from "./navigation/NavigationBar";
import Signup from "./pages/signup";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/signin";
import ModifyPasswordPage from "./pages/modifyPassword";

import SignupAdditional from "./pages/signupAdditional";
import ModifyUserInfo from "./pages/modifyUserInfo";

function App() {
  return (
    <Layout className="layout">
      <Layout.Header style={{ background: "white" }}>
        <NavigationBar />
      </Layout.Header>
      <Layout.Content className="content">
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
              <Signup />
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
  );
}

export default App;

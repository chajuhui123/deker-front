import { Route, Switch } from "react-router-dom";
import classes from "./App.module.css";

import NavigationBar from "./components/main/NavigationBar";
import KakaoAuth from "./oauth/kakao";
import SigninPage from "./pages/SigninPage";
import ModifyPasswordPage from "./pages/modifyPassword";
import Footer from "./components/main/Footer";

import SignupAdditional from "./pages/signupAdditional";
import ModifyUserInfo from "./pages/modifyUserInfo";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
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
              <SignupAdditional />
            </div>
          </Route>
          <Route path="/modifyUserInfo" exact>
            <div>
              <ModifyUserInfo />
            </div>
          </Route>
          <Route path="/modifyPassword" exact>
            <div>
              <ModifyPasswordPage />
            </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

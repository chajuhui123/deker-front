import CommAlert from "components/common/commAlert";
import classes from "./signinForm.module.css";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isEmail, isPassword } from "api/check";
import logoImg from "img/logo.png";
import { postApi } from "api/fetch-api";
import { API_SIGNIN } from "api/account-api";
import { userAction } from "store/user-slice";
import { calculateRemainingTime } from "api/check";
import { useHistory } from "react-router-dom";
import { modalAction } from "store/modal-slice";

function SigninForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isVaildEmail, setIsVaildEmail] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  const onChangeEmail = () => {
    const enteredEmail = emailInputRef.current.value;
    if (!isEmail(enteredEmail)) {
      setIsVaildEmail(false);
    } else {
      setIsVaildEmail(true);
    }
  };
  const onChangePassword = () => {
    const enteredPassword = passwordInputRef.current.value;
    if (!isPassword(enteredPassword)) {
      setIsVaildPass(false);
    } else {
      setIsVaildPass(true);
    }
  };

  const handleSignIn = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredSigninForm = {
      id: enteredEmail,
      password: enteredPassword,
      platformCode: "P01",
    };
    if (!isVaildEmail) return;
    if (!isVaildPass) return;
    dispatch(postApi(API_SIGNIN, enteredSigninForm, fnCallback));
  };

  const onKeyPressEnter = (e) => {
    if (e.charCode === 13) {
      handleSignIn();
    }
  };

  const handleLogout = useCallback(() => {
    dispatch(userAction.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("extTokenTime");
  }, [dispatch]);

  const fnCallback = (res) => {
    console.log("signinForm :: res :: ", res);
    if (!!res) {
      const remainingDuration = calculateRemainingTime(res.data.extTokenTime);
      localStorage.setItem("token", res.data.jwtToken);
      localStorage.setItem("extTokenTime", res.data.extTokenTime);
      setTimeout(handleLogout, remainingDuration);
      dispatch(
        userAction.login({
          jwtToken: res.data.jwtToken,
        })
      );
      history.push("/");
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="??????" message="????????? ??? ????????? ??????????????????." />
          ),
        })
      );
    }
  };

  return (
    <div className={classes.signin_box}>
      <Link to="/">
        <img className={classes.signin_logo} src={logoImg} alt="??????" />
      </Link>
      <form onKeyPress={onKeyPressEnter}>
        <input
          type="email"
          id="email"
          className={classes.signin_email_input}
          required
          placeholder="?????????"
          ref={emailInputRef}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          id="password"
          placeholder="????????????"
          className={classes.signin_password_input}
          required
          ref={passwordInputRef}
          onChange={onChangePassword}
        />
      </form>
      <div className={classes.signin_valid}>
        {!isVaildEmail && isVaildPass && (
          <p>????????? ????????? ????????? ??????????????????.</p>
        )}
        {isVaildEmail && !isVaildPass && (
          <p>??????, ????????? ????????? 8??? ????????? ??????????????? ??????????????????.</p>
        )}
        {!isVaildEmail && !isVaildPass && (
          <p>???????????? ??????????????? ?????? ??????????????????.</p>
        )}
      </div>
      <button className={classes.signin_btn} onClick={handleSignIn}>
        ?????????
      </button>

      <div className={classes.signin_links}>
        <Link to="/" className={classes.signin_link}>
          ???????????? ?????????
        </Link>
        <Link to="/account/signup" className={classes.signin_link}>
          ????????????
        </Link>
      </div>
    </div>
  );
}

export default SigninForm;

import CommAlert from "components/common/commAlert";
import classes from "./signinForm.module.css";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isEmail, isPassword } from "api/check";
import logoImg from "img/logo.png";
import { postApi } from "api/fetch-api";
import { API_SIGNIN } from "api/signin-api";
import { userAction } from "store/user-slice";
import { calculateRemainingTime } from "api/check";
import { useHistory } from "react-router";
import { modalAction } from "store/modal-slice";

function SigninForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isVaildEmail, setIsVaildEmail] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  const EmailOnChangeHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    if (!isEmail(enteredEmail)) {
      setIsVaildEmail(false);
    } else {
      setIsVaildEmail(true);
    }
  };
  const PasswordOnChangeHandler = () => {
    const enteredPassword = passwordInputRef.current.value;
    if (!isPassword(enteredPassword)) {
      setIsVaildPass(false);
    } else {
      setIsVaildPass(true);
    }
  };

  const SigninHandler = (event) => {
    event.preventDefault();
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

  const logoutHandler = useCallback(() => {
    dispatch(userAction.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("extTokenTime");
  }, [dispatch]);

  const fnCallback = (res) => {
    console.log(res);
    dispatch(
      userAction.login({
        jwtToken: res.data.jwtToken,
      })
    );
    if (!!res) {
      history.push("/");
      const remainingDuration = calculateRemainingTime(res.data.extTokenTime);
      localStorage.setItem("token", res.data.jwtToken);
      localStorage.setItem("extTokenTime", res.data.extTokenTime);
      setTimeout(logoutHandler, remainingDuration);
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="오류" message="로그인 중 오류가 발생했습니다." />
          ),
        })
      );
    }
  };

  return (
    <div className={classes.signin_box}>
      <Link to="/">
        <img className={classes.signin_logo} src={logoImg} alt="로고" />
      </Link>
      <div>
        <input
          type="email"
          id="email"
          className={classes.signin_email_input}
          required
          placeholder="이메일"
          ref={emailInputRef}
          onChange={EmailOnChangeHandler}
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          className={classes.signin_password_input}
          required
          ref={passwordInputRef}
          onChange={PasswordOnChangeHandler}
        />
      </div>
      <div className={classes.signin_valid}>
        {!isVaildEmail && isVaildPass && (
          <p>올바른 이메일 형태를 입력해주세요.</p>
        )}
        {isVaildEmail && !isVaildPass && (
          <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        )}
        {!isVaildEmail && !isVaildPass && (
          <p>이메일과 비밀번호를 다시 확인해주세요.</p>
        )}
      </div>
      <button className={classes.signin_btn} onClick={SigninHandler}>
        로그인
      </button>

      <div className={classes.signin_links}>
        <Link to="/" className={classes.signin_link}>
          비밀번호 재설정
        </Link>
        <Link to="/signup" className={classes.signin_link}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default SigninForm;

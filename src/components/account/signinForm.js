import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import classes from "./signinForm.module.css";
import { isEmail, isPassword } from "../../api/check";
// img import
import logoImg from "../../img/logo.png";

function SigninForm() {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isVaildEmail, setIsVaildEmail] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  // 로그인 요청 핸들러
  const SigninHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // 이메일 유효성 검사
    if (!isEmail(enteredEmail)) {
      setIsVaildEmail(false);
    } else {
      setIsVaildEmail(true);
    }

    // 비밀번호 유효성 검사
    if (!isPassword(enteredPassword)) {
      setIsVaildPass(false);
    } else {
      setIsVaildPass(true);
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

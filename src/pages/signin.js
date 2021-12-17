import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { isEmail, isPassword } from "../api/check";
// img import
import logoImg from "../img/logo.png";
import googleImg from "../img/google.jpg";
import kakaoImg from "../img/kakao.png";
import naverImg from "../img/naver.jpg";

function Signin() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isVaildEmail, setIsVaildEmail] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  // 로그인 요청
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
    <div className="signin-box">
      <Link to="/">
        <img className="signin-logo" src={logoImg} alt="로고" />
      </Link>

      <div>
        <input
          type="email"
          id="email"
          className="signin-email-input"
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
          className="signin-password-input"
          required
          ref={passwordInputRef}
        />
      </div>
      <div className="signin-valid">
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
      <button className="signin-btn" onClick={SigninHandler}>
        로그인
      </button>

      <div className="signin-links">
        <Link to="/" className="signin-link">
          비밀번호 재설정
        </Link>
        <Link to="/signup" className="signin-link">
          회원가입
        </Link>
      </div>

      <div className="signin-social">
        <p>SNS계정으로 간편 로그인/회원가입</p>
        <div className="signin-social-img">
          <img src={googleImg} alt="구글" />
          <img src={kakaoImg} alt="카카오" />
          <img src={naverImg} alt="네이버" />
        </div>
      </div>
    </div>
  );
}

export default Signin;

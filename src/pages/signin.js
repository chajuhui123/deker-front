import { useRef } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
// img import
import logoImg from "../img/logo.png";
import googleImg from "../img/google.jpg";
import kakaoImg from "../img/kakao.png";
import naverImg from "../img/naver.jpg";

function Signin() {
  // 로그인 요청
  const sumbmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
      <button className="signin-btn">로그인</button>

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

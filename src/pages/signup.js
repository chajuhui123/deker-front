import React, { useRef, useState } from "react";
import GoogleLoginBtn from "../oauth/google";
import api from "../api/testFirebase";
import "./signup.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import KakaoLoginBtn from "../oauth/kakao";
import NaverLogin from "react-naver-login";

/**
 * TODO
 * 1. Naver Login
 * 2. Back Endpoint connect
 * 3. Redirect 'User Detail Info page' after signup and login
 * 4. Focusing input area about Error occured
 */

function Signup(props) {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSame, setIsSame] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);

  const userIdRef = useRef();
  const passwordRef = useRef();
  const rePassword = useRef();
  const nicknameRef = useRef();

  const googleLoginHandler = (googleId, email, name) => {
    setUserId(email);
    setNickname(name);
    setInputPassword(googleId);
    setIsSame(true);
    submit("2");
  };

  const onKakaoLoginSuccessHandler = (kakaoId, email, name) => {
    setUserId(email);
    setNickname(name);
    setInputPassword(kakaoId);
    setIsSame(true);
    submit("3");
  };

  // const onNaverLoginSuccessHandler = (token) => {
  //   console.log("onNaverLoginSuccessHandler() token :: ", token);
  // };

  // 아이디 Input Handler
  const idInputHandler = (e) => {
    setUserId(e.target.value);
  };
  // 비밀번호 Input Handler
  const pwInputHandler = (e) => {
    setInputPassword(e.target.value);
    const check =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (check.test(passwordRef.current.value)) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  // 닉네임 Input Handler
  const nicknameInputHandler = (e) => {
    setNickname(e.target.value);
  };

  // 비밀번호 확인 로직
  const rePasswordHandler = () => {
    if (rePassword.current.value === passwordRef.current.value) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  };

  const submit = (accountType) => {
    const signupData = {
      userId: userIdRef.current.value,
      inputPassword: passwordRef.current.value,
      nickname: nicknameRef.current.value,
      accountType: accountType || "1",
    };
    api("signup.json", signupData, fnCallback);
  };

  const fnCallback = (res) => {
    console.log("fnCallback() res ::: ", res);
    history.push("/signupUserInfo");
  };

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    submit();
  };

  const loginPageHandler = () => {
    history.push("/login");
  };

  return (
    <form onSubmit={signupSubmitHandler}>
      <div className="signup">
        <div className="signupInner">
          <p className="signupTitle">회원가입</p>
          <div className="snsArea">
            <p className="snsTitle">SNS계정으로 간편 로그인/회원가입</p>
            <div className="snsBtnArea">
              <div className="snsGoogle">
                <GoogleLoginBtn
                  onGoogleLogin={googleLoginHandler}
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    ></div>
                  )}
                />
              </div>
              <KakaoLoginBtn onSuccess={onKakaoLoginSuccessHandler} />
              <div className="snsNaver" id="naverIdLogin">
                <NaverLogin
                  clientId="8dvi0_ZoIcwCt8P7IVyJ"
                  callbackUrl="http://localhost:3000"
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    ></div>
                  )}
                />
              </div>
            </div>
          </div>
          {/* asdfafdsafds */}
          <div className="userInfoArea">
            <p className="userTitle">아이디</p>
            <div>
              <input
                className="userInput"
                type="text"
                value={userId}
                onChange={idInputHandler}
                ref={userIdRef}
              ></input>
            </div>
            <p className="userTitle">비밀번호</p>
            <div>
              <input
                className="userInput"
                type="password"
                value={inputPassword}
                onChange={pwInputHandler}
                ref={passwordRef}
              ></input>
              {checkPassword !== null && !checkPassword && (
                <h6 style={{ color: "red", margin: "5px" }}>
                  영문, 숫자, 특수문자를 포함한 8자 이상 비밀번호로
                  설정해주세요.
                </h6>
              )}
            </div>
            <p className="userTitle">비밀번호확인</p>
            <div>
              <input
                className="userInput"
                type="password"
                ref={rePassword}
                onChange={rePasswordHandler}
              ></input>
            </div>
            {isSame !== null && !isSame && (
              <h6 style={{ color: "red", margin: "5px" }}>
                비밀번호가 같지 않습니다.
              </h6>
            )}
            <p className="userTitle">닉네임</p>
            <div>
              <input
                className="userInput"
                type="text"
                value={nickname}
                onChange={nicknameInputHandler}
                ref={nicknameRef}
              ></input>
            </div>
            <p className="userTitle">약관동의</p>
            <div>약관 영역</div>
          </div>
        </div>
      </div>
      {isSame && checkPassword && (
        <button className="signupBtn" type="submit">
          회원가입 하기
        </button>
      )}
      <div className="guideArea">
        <p className="guideText">이미 아이디가 있으신가요?</p>
        <p className="loginText" onClick={loginPageHandler}>
          로그인
        </p>
      </div>
    </form>
  );
}

export default Signup;

import React, { useRef, useState } from "react";

import api from "../../api/testFirebase";
import classes from "./signup.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SocialLogin from "../common/socialLogin";

import { isPassword } from "../../api/check";

/**
 * TODO
 * 1. Login / Signup은 backend와 협의 해야함
 * 2. Front에서 Social에서 Code를 발급 받아서 Backend로 전달
 * 3. Backend에서 Social에 Access Token을 요청
 * 4. Backend에서 받아온 Access Token을 가지고 Login 요청
 * 5. Login Success가 되면 JWT Token을 생성하여 Front에 전달
 * 6. Front에서 JWT Token을 만료기간까지 Local Storage에 저장
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

  // 아이디 Input Handler
  const idInputHandler = (e) => {
    setUserId(e.target.value);
  };
  // 비밀번호 Input Handler
  const pwInputHandler = (e) => {
    setInputPassword(e.target.value);
    console.log("setCheckPassword :: ", isPassword(passwordRef.current.value));
    setCheckPassword(isPassword(passwordRef.current.value));
  };
  // 닉네임 Input Handler
  const nicknameInputHandler = (e) => {
    setNickname(e.target.value);
  };

  // 비밀번호 확인 로직
  const rePasswordHandler = () => {
    console.log(
      "setIsSame :: ",
      rePassword.current.value === passwordRef.current.value
    );
    setIsSame(rePassword.current.value === passwordRef.current.value);
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
    <form className={classes.signupForm} onSubmit={signupSubmitHandler}>
      <div className={classes.signupDiv}>
        <div className={classes.signupInner}>
          <p className={classes.signupTitle}>회원가입</p>
          <div className={classes.snsArea}>
            <p className={classes.snsTitle}>SNS계정으로 간편 로그인/회원가입</p>
            <SocialLogin fnCallback={fnCallback} />
          </div>
          <div className={classes.userInfoArea}>
            <p>아이디</p>
            <input
              className={classes.userInput}
              type="text"
              value={userId}
              onChange={idInputHandler}
              ref={userIdRef}
            ></input>
            {/* 이매일 인증 버튼 영역 */}
            <p>비밀번호</p>
            <h6>
              영문, 숫자, 특수문자를 포함한 8자 이상 비밀번호로 설정해주세요.
            </h6>
            <input
              className={classes.userInput}
              type="password"
              value={inputPassword}
              onChange={pwInputHandler}
              ref={passwordRef}
            ></input>

            <p>비밀번호확인</p>
            <input
              className={classes.userInput}
              type="password"
              ref={rePassword}
              onChange={rePasswordHandler}
            ></input>
            {isSame !== null && !isSame && (
              <h6 style={{ color: "red", margin: "5px" }}>
                비밀번호가 같지 않습니다.
              </h6>
            )}
            <p>닉네임</p>
            <input
              className={classes.userInput}
              type="text"
              value={nickname}
              onChange={nicknameInputHandler}
              ref={nicknameRef}
            ></input>
            <p>약관동의</p>
            <div>약관 영역</div>
          </div>
        </div>
      </div>
      {isSame && checkPassword && nickname && (
        <button className={classes.signupBtn} type="submit">
          회원가입 하기
        </button>
      )}
      <div className={classes.guideArea}>
        <p className={classes.guideText}>이미 아이디가 있으신가요?</p>
        <p className={classes.loginText} onClick={loginPageHandler}>
          로그인
        </p>
      </div>
    </form>
  );
}

export default Signup;

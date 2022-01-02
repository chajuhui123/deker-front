import React, { useRef, useState } from "react";

import { postApi } from "../../api/fetch-api";

import classes from "./signup.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SocialLogin from "../common/socialLogin";

import { isPassword } from "../../api/check";
import CommInput from "../common/input-with-title";

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
    postApi("nmb/acct/reg/member", signupData, fnCallback);
  };

  const fnCallback = (res) => {
    console.log(res);
    //history.push("/signupUserInfo");
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
            <CommInput
              title="아이디"
              value={userId}
              onChange={idInputHandler}
              refer={userIdRef}
            />
            {/* 이매일 인증 버튼 영역 */}
            <CommInput
              title="비밀번호"
              type="password"
              value={inputPassword}
              onChange={pwInputHandler}
              refer={passwordRef}
              noti="영문, 숫자, 특수문자를 포함한 8자 이상 비밀번호로 설정해주세요."
            />
            <CommInput
              title="비밀번호확인"
              type="password"
              refer={rePassword}
              onChange={rePasswordHandler}
            />
            {isSame !== null && !isSame && (
              <h6 style={{ color: "red", margin: "5px" }}>
                비밀번호가 같지 않습니다.
              </h6>
            )}
            <CommInput
              title="닉네임"
              value={nickname}
              onChange={nicknameInputHandler}
              refer={nicknameRef}
            />
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

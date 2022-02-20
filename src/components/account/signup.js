import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { postApi } from "api/fetch-api";
import { isPassword } from "api/check";

import SocialLogin from "components/common/socialLogin";
import CommInput from "components/common/commInput";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";

import classes from "./signup.module.css";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

function Signup(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSame, setIsSame] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);
  const [sendEmail, setSendEmail] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [emailAuth, setEmailAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userIdRef = useRef();
  const passwordRef = useRef();
  const rePassword = useRef();
  const nicknameRef = useRef();
  const emailCodeRef = useRef();

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
    setIsSame(rePassword.current.value === passwordRef.current.value);
  };
  // Email 인증 코드 Input Handler
  const emailCodeInputHandler = (e) => {
    setEmailCode(e.target.value);
  };

  const submit = () => {
    const signupData = {
      id: userIdRef.current.value,
      password: passwordRef.current.value,
      nickname: nicknameRef.current.value,
      platformCode: "P01",
      agreeYn: "Y",
    };
    dispatch(postApi("nmb/acct/reg/member", signupData, fnCallback));
  };

  // back 호출 후 success callback method
  const fnCallback = (res) => {
    console.log(res);
    if (!!res) {
      history.push("/signup/additional");
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert
              title="오류"
              message="회원가입 중 오류가 발생했습니다."
            />
          ),
        })
      );
    }
  };

  // 회원가입 버튼 클릭 handler
  const signupSubmitHandler = (e) => {
    if (!checkPassword) {
      passwordRef.current.focus();
      return;
    }
    if (!isSame) {
      rePassword.current.focus();
      return;
    }
    if (!nickname) {
      nicknameRef.current.focus();
      return;
    }
    if (!emailAuth) {
      return;
    }
    submit();
  };

  const loginPageHandler = () => {
    history.push("/signin");
  };

  const emailAuthHandler = () => {
    setIsLoading(true);
    const sendData = {
      id: userIdRef.current.value,
    };
    dispatch(postApi("nmb/acct/member/mail-send", sendData, emailSendCallback));
  };

  const emailSendCallback = (res) => {
    console.log("emailSendCallback :: ", res);
    if (!!res) {
      setIsLoading(false);
      setSendEmail(true);
    }
  };

  const emailCodeHandler = () => {
    setIsLoading(true);
    const sendData = {
      id: userIdRef.current.value,
      checkString: emailCodeRef.current.value,
    };
    dispatch(
      postApi("nmb/acct/get/member/mail/check", sendData, emailCodeCallback)
    );
  };

  const emailCodeCallback = (res) => {
    console.log("emailCodeCallback :: ", res);
    setIsLoading(false);
    if (!!res) {
      console.log("setEmailAuth(true)");
      setEmailAuth(true);
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert
              title="오류"
              message="인증코드가 다릅니다. 재요청 해주세요."
            />
          ),
        })
      );
      setEmailAuth(false);
      setSendEmail(false);
    }
  };

  return (
    <form className={classes.signupForm} onSubmit={signupSubmitHandler}>
      <div className={classes.signupDiv}>
        <div className={classes.signupInner}>
          <CommonPageTitle title="회원가입" />
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
            {emailAuth ||
              (sendEmail && (
                <>
                  <CommInput
                    title="인증 코드"
                    type="text"
                    value={emailCode}
                    onChange={emailCodeInputHandler}
                    refer={emailCodeRef}
                  />
                  <CommBtn
                    btnText="코드 확인"
                    btnCursor="pointer"
                    isLoading={isLoading}
                    fnClick={emailCodeHandler}
                  />
                </>
              )) || (
                <CommBtn
                  btnText="Email 인증"
                  btnCursor="pointer"
                  isLoading={isLoading}
                  fnClick={emailAuthHandler}
                />
              )}
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
      <CommBtn
        btnText="회원가입 하기"
        btnWidth="100%"
        btnMargin="30px auto"
        bgColor={
          (!isSame || !checkPassword || !nickname || !emailAuth) && "gray"
        }
        btnCursor="pointer"
        radius="4px"
        fnClick={signupSubmitHandler}
      />
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

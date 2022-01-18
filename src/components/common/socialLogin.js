import GoogleLoginBtn from "oauth/google";
import KakaoLoginBtn from "oauth/kakao";
import NaverLoginBtn from "oauth/naver";
import { postApi } from "api/fetch-api";

import classes from "./socialLogin.module.css";
import { useDispatch } from "react-redux";

function SocialLogin({ fnCallback }) {
  const dispatch = useDispatch();
  const submit = (signupData) => {
    dispatch(postApi("nmb/acct/reg/member", signupData, fnCallback));
  };

  const onGoogleLoginSuccessHandler = (googleId, email, name) => {
    submit({
      id: email,
      platformCode: "P02",
      nickname: name,
      socialId: googleId,
      agreeYn: "Y",
    });
  };

  const onKakaoLoginSuccessHandler = (kakaoId, email, name) => {
    submit({
      id: email,
      platformCode: "P03",
      nickname: name,
      socialId: kakaoId,
      agreeYn: "Y",
    });
  };

  const onNaverLoginSuccessHandler = (naverId, email, name) => {
    submit({
      id: email,
      platformCode: "P04",
      nickname: name,
      socialId: naverId,
      agreeYn: "Y",
    });
  };
  return (
    <div className={classes.snsBtnArea}>
      <GoogleLoginBtn onSuccess={onGoogleLoginSuccessHandler} />
      <KakaoLoginBtn onSuccess={onKakaoLoginSuccessHandler} />
      <NaverLoginBtn onSuccess={onNaverLoginSuccessHandler} />
    </div>
  );
}

export default SocialLogin;

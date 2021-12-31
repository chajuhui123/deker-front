import GoogleLoginBtn from "../../oauth/google";
import KakaoLoginBtn from "../../oauth/kakao";
import NaverLoginBtn from "../../oauth/naver";
import { postApi } from "../../api/fetch-api";

import classes from "./socialLogin.module.css";

function SocialLogin({ fnCallback }) {
  const submit = (signupData) => {
    postApi("nmb/acct/reg/member", signupData, fnCallback);
  };

  const onGoogleLoginSuccessHandler = (googleId, email, name) => {
    submit({
      id: email,
      socialId: googleId,
      platformCode: "P02",
      nickname: name,
      agreeYn: "Y",
    });
  };

  const onKakaoLoginSuccessHandler = (kakaoId, email, name) => {
    submit({
      id: email,
      socialId: kakaoId,
      platformCode: "P03",
      nickname: name,
      agreeYn: "Y",
    });
  };

  const onNaverLoginSuccessHandler = (naverId, email, name) => {
    submit({
      id: email,
      socialId: naverId,
      platformCode: "P04",
      nickname: name,
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

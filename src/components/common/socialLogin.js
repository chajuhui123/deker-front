import GoogleLoginBtn from "../../oauth/google";
import KakaoLoginBtn from "../../oauth/kakao";
import NaverLoginBtn from "../../oauth/naver";
import api from "../../api/testFirebase";

import classes from "./socialLogin.module.css";

function SocialLogin({ fnCallback }) {
  const submit = (signupData) => {
    api("signup.json", signupData, fnCallback);
  };

  const onGoogleLoginSuccessHandler = (googleId, email, name) => {
    submit({
      memberId: email,
      accountType: "2",
      nickname: name,
      password: googleId,
    });
  };

  const onKakaoLoginSuccessHandler = (kakaoId, email, name) => {
    submit({
      memberId: email,
      accountType: "3",
      nickname: name,
      password: kakaoId,
    });
  };

  const onNaverLoginSuccessHandler = (naverId, email, name) => {
    submit({
      memberId: email,
      accountType: "4",
      nickname: name,
      password: naverId,
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

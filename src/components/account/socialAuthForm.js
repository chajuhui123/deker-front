import classes from "./socialAuthForm.module.css"
import googleImg from "../../img/google.jpg";
import kakaoImg from "../../img/kakao.png";
import naverImg from "../../img/naver.jpg";

function SocialAuthForm() {
  return (
    <div className={classes.signin_social}>
      <p>SNS계정으로 간편 로그인/회원가입</p>
      <div className={classes.signin_social_img}>
        <img src={googleImg} alt="구글" />
        <img src={kakaoImg} alt="카카오" />
        <img src={naverImg} alt="네이버" />
      </div>
    </div>
  );
}

export default SocialAuthForm;

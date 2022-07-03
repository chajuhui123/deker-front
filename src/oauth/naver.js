import NaverLogin from "react-naver-login";
import naverImg from "../img/naver.jpg";
import classes from "./naver.module.css";

function NaverLoginBtn({ onSuccess }) {
  const onNaverLoginSuccessHandler = (res) => {
    const userId = res.id;
    const email = res.email;
    const nickname = res.nickname;
    onSuccess(userId, email, nickname);
  };
  return (
    <NaverLogin
      clientId="8dvi0_ZoIcwCt8P7IVyJ"
      callbackUrl="http://localhost:3000/account/signup"
      onSuccess={onNaverLoginSuccessHandler}
      render={(renderProps) => (
        <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img className={classes.naverImg} src={naverImg} alt="KakaoImage" />
        </div>
      )}
    />
  );
}

export default NaverLoginBtn;

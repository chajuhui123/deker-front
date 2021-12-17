import KakaoLogin from "react-kakao-login";
import kakaoImage from "../img/kakao.png";
import "./kakao.css";

export default function KakaoLoginBtn({ onSuccess }) {
  const onKakaoLoginSuccessHandler = (res) => {
    const userId = res.profile.id;
    const email = res.profile.kakao_account.email;
    const nickname = res.profile.kakao_account.profile.nickname;
    onSuccess(userId, email, nickname);
  };
  return (
    <KakaoLogin
      token="1db6a335fd43e6cf15916ff4837a84b5"
      onSuccess={onKakaoLoginSuccessHandler}
      onFail={console.error}
      onLogout={console.info}
      render={(renderProps) => (
        <div
          className="snsKakao"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img className="kakaoImg" src={kakaoImage} alt="KakaoImage" />
        </div>
      )}
    />
  );
}

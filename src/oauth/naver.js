import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom/";

const { naver } = window;

function NaverLogin({ onSuccess }) {
  const location = useLocation();

  const getNaverToken = useCallback(() => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);
    onSuccess(token);
  }, [location.hash, onSuccess]);

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "8dvi0_ZoIcwCt8P7IVyJ",
      callbackUrl: "http://localhost:3000/signup",
      isPopup: true, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "white", type: 1, height: "70", opacity: 0 }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, [getNaverToken]);

  return <div id="naverIdLogin" />;
}

export default NaverLogin;

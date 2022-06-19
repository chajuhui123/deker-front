import SigninForm from "../../../components/account/signin/signinForm";
import SocialLogin from "components/common/socialLogin";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";
import { userAction } from "store/user-slice";
import { useCallback } from "react";
import { calculateRemainingTime } from "api/check";

const SigninPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(userAction.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("extTokenTime");
  }, [dispatch]);

  const fnCallback = (res) => {
    if (!!res) {
      const remainingDuration = calculateRemainingTime(res.data.extTokenTime);
      localStorage.setItem("token", res.data.jwtToken);
      localStorage.setItem("extTokenTime", res.data.extTokenTime);
      setTimeout(logoutHandler, remainingDuration);
      dispatch(
        userAction.login({
          jwtToken: res.data.jwtToken,
        })
      );
      history.push("/");
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="오류" message="로그인 중 오류가 발생했습니다." />
          ),
        })
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SigninForm />
      <p style={{ fontSize: "14px", marginTop: "20px" }}>
        SNS계정으로 간편 로그인/회원가입
      </p>
      <SocialLogin fnCallback={fnCallback} />
    </div>
  );
};

export default SigninPage;

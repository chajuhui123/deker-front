import SigninForm from "../components/account/signinForm";
import SocialLogin from "components/common/socialLogin";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

const SigninPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const fnCallback = (res) => {
    console.log(res);
    if (!!res) {
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

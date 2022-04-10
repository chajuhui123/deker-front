import { useState, useRef } from "react";
import "./modifyPassword.css";
import { isPassword } from "../api/check";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";

function ModifyPassword() {
  const dispatch = useDispatch();

  const passInputRef = useRef();
  const rePassInputRef = useRef();

  const [isSame, setIsSame] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  const handleModifyPass = () => {
    passInputRef.current.value === rePassInputRef.current.value
      ? setIsSame(true)
      : setIsSame(false);
    !isPassword(passInputRef) ? setIsVaildPass(false) : setIsVaildPass(true);

    // dispatch(postApi(API_SIGNIN, enteredSigninForm, fnCallback));
  };

  return (
    <div className="modifyPass">
      <h1 className="modifyPass-main-title">비밀번호 변경</h1>
      <p className="modifyPass-title">새 비밀번호</p>
      <p className="modifyPass-text">
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </p>
      <input
        type="password"
        id="password"
        className="modifyPass-input"
        required
        ref={passInputRef}
      />
      <p className="modifyPass-title">비밀번호 확인</p>
      <input
        type="password"
        id="password-check"
        className="modifyPass-input"
        required
        ref={rePassInputRef}
      />
      <div className="modifyPass-valid">
        {!isSame && <p>비밀번호가 일치하지 않습니다.</p>}
        {isSame && !isVaildPass && (
          <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        )}
      </div>
      <button className="modifyPass-btn" onClick={handleModifyPass}>
        비밀번호 변경
      </button>
    </div>
  );
}

export default ModifyPassword;

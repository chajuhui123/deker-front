import { useState, useRef } from "react";
import "./modifyPassword.css";
import { isPassword } from "../api/check";

function ModifyPassword(props) {
  const passInputRef = useRef();
  const rePassInputRef = useRef();
  const [isSame, setIsSame] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  // 비밀번호 변경
  const modifyPassHandler = () => {
    // 비밀번호 일치 확인
    if (passInputRef.current.value === rePassInputRef.current.value) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
    // 비밀번호 유효성 검사
    if (!isPassword(passInputRef)) {
      setIsVaildPass(false);
    } else {
      setIsVaildPass(true);
    }
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
        {!isSame && isVaildPass && <p>비밀번호가 일치하지 않습니다.</p>}
        {(isSame || !isSame) && !isVaildPass && (
          <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        )}
      </div>
      <button className="modifyPass-btn" onClick={modifyPassHandler}>
        비밀번호 변경
      </button>
    </div>
  );
}

export default ModifyPassword;

import React, { useState, useRef, useEffect } from "react";
import "./modifyPassword.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CommAlert from "components/common/commAlert";
import { postApi } from "api/fetch-api";
import { isPassword } from "../api/check";
import { modalAction } from "store/modal-slice";
import { API_MOD_PASSWORD } from "api/account-api";

function ModifyPassword() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputPassword, setInputPassword] = useState("");
  const [reInputPassword, setReInputPassword] = useState("");

  const [isSame, setIsSame] = useState(true);
  const [isVaildPass, setIsVaildPass] = useState(true);

  const handleModifyPass = () => {
    dispatch(
      postApi(
        API_MOD_PASSWORD,
        { password: inputPassword },
        fnCallbackModifyPassword
      )
    );
  };

  const fnCallbackModifyPassword = (res) => {
    if (!!res) {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="안내" message="비밀번호 변경을 성공하였습니다." />
          ),
        })
      );
      history.push("/");
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert
              title="오류"
              message="비밀번호 변경 중 오류가 발생했습니다."
            />
          ),
        })
      );
    }
  };

  useEffect(() => {
    if (inputPassword !== "") {
      inputPassword !== reInputPassword ? setIsSame(false) : setIsSame(true);
      !isPassword(inputPassword) ? setIsVaildPass(false) : setIsVaildPass(true);
    }
  }, [inputPassword, reInputPassword]);

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
        onChange={(event) => {
          setInputPassword(event.target.value);
        }}
      />
      <p className="modifyPass-title">비밀번호 확인</p>
      <input
        type="password"
        id="password-check"
        className="modifyPass-input"
        required
        onChange={(event) => {
          setReInputPassword(event.target.value);
        }}
      />
      <div className="modifyPass-valid">
        {!isSame && <p>비밀번호가 일치하지 않습니다.</p>}
        {isSame && !isVaildPass && (
          <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        )}
      </div>
      <button
        className="modifyPass-btn"
        disabled={inputPassword === "" || !isSame || !isVaildPass}
        onClick={handleModifyPass}
      >
        비밀번호 변경
      </button>
    </div>
  );
}

export default ModifyPassword;

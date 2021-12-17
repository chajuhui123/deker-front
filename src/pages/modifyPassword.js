import "./modifyPassword.css";

function ModifyPassword(props) {
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
      />
      <p className="modifyPass-title">비밀번호 확인</p>
      <input
        type="password"
        id="password-check"
        className="modifyPass-input"
        required
      />
      <button className="modifyPass-btn">비밀번호 변경</button>
    </div>
  );
}

export default ModifyPassword;

import { useRef } from "react";

function Signin() {
  // 로그인 요청
  const sumbmitHandler = (event) => {
    event.preventDefault();
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <div>
      <div>
        <input type="email" id="email" required ref={emailInputRef} />
      </div>
      <div>
        <input type="password" id="password" required ref={passwordInputRef} />
      </div>
    </div>
  );
}

export default Signin;

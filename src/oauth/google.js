import React from "react";
import GoogleLogin from "react-google-login";
import "./google.css";

const clientId =
  "552147493556-b2fe3c27j51ir49vlirakffs87ivtk0s.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    await onGoogleLogin(googleId, email, name);
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div className="none">
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

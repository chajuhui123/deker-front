import GoogleLogin from "react-google-login";
import googleImage from "../img/google.jpg";
import classes from "./google.module.css";

const clientId =
  "552147493556-b2fe3c27j51ir49vlirakffs87ivtk0s.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onSuccess }) {
  const onGoogleLoginSuccessHandler = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    await onSuccess(googleId, email, name);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onGoogleLoginSuccessHandler}
      onFail={console.error}
      onLogout={console.info}
      render={(renderProps) => (
        <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img
            className={classes.googleImg}
            src={googleImage}
            alt="GoogleImage"
          />
        </div>
      )}
    />
  );
}

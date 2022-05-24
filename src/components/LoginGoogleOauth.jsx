import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "959897734432-vvl2g84djul3vcla8gbsuuu36k6mv8io.apps.googleusercontent.com";

function LoginGoogleOauth() {
  const onSuccess = (response) =>
    console.log("Login SUCCESS", response.profileObj);

  const onFailure = (response) => console.log("Login FAILURE", response);

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogleOauth;

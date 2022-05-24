import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "959897734432-vvl2g84djul3vcla8gbsuuu36k6mv8io.apps.googleusercontent.com";

function LogoutGoogleOauth() {
  const onSuccess = () => console.log("Logout SUCCESS");
  const onFailure = (response) => console.log("Logout FAILURE", response);

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onLogoutFailure={onFailure}
      />
    </div>
  );
}

export default LogoutGoogleOauth;

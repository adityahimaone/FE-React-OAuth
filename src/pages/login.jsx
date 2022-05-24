import React, { useEffect } from "react";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import styles from "../assets/stylesheet/register.module.css";
import LoginGoogleOauth from "../components/LoginGoogleOauth";
import LogoutGoogleOauth from "../components/LogoutGoogleOauth";
import { gapi } from "gapi-script";

const clientId =
  "959897734432-vvl2g84djul3vcla8gbsuuu36k6mv8io.apps.googleusercontent.com";

function Login() {
  let accessToken = "";

  const start = () => {
    gapi.client.init({
      clientId: clientId,
      script: "",
    });
    accessToken = gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse(true).access_token;
  };

  useEffect(() => {
    gapi.load("client:auth2", start);
    console.log(accessToken, "accc");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen mx-auto">
      <div
        className={`hidden lg:block lg:w-[70%] ${styles["background-image-login"]}`}
      ></div>
      <div className="w-full lg:w-[30%]  flex flex-col justify-center items-center">
        <div className="w-full p-10">
          <h1 className="text-2xl text-left font-bold my-5">
            Welcome, Admin BCR
          </h1>
          <form action="" className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Contoh : jhondoe@gmail.com"
                className="input-form"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="6+ Karakter"
                className="input-form"
              />
            </div>
            <div className="flex flex-col py-3 space-y-2">
              <ButtonPrimary>Sign In</ButtonPrimary>
              <LoginGoogleOauth />
              <LogoutGoogleOauth />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

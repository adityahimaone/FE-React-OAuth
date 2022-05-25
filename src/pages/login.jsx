import React, { useEffect } from "react";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import styles from "../assets/stylesheet/register.module.css";
import LoginGoogleOauth from "../components/LoginGoogleOauth";
import LogoutGoogleOauth from "../components/LogoutGoogleOauth";
import { gapi } from "gapi-script";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../stores/authLoginSlice";
import { apiFetch } from "../utils/apiFetch";

const clientId =
  "959897734432-vvl2g84djul3vcla8gbsuuu36k6mv8io.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let accessToken = "";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    apiFetch.post("/admin/auth/login", payload).then((res) => {
      dispatch(setAuthLogin(res.data));
      if (res.data.role === "admin") {
        navigate("/dashboard");
      }
      if (res.data.role === "Customer") {
        navigate("/home");
      }
    });
  };

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
    // if (accessToken !== null || undefined) {
    //   navigate("/dashboard");
    // }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Contoh : jhondoe@gmail.com"
                className="input-form"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="6+ Karakter"
                className="input-form"
                {...register("password")}
              />
            </div>
            <div className="flex flex-col py-3 space-y-2">
              <ButtonPrimary type="submit">Sign In</ButtonPrimary>
              <LoginGoogleOauth />
              {/* <LogoutGoogleOauth /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

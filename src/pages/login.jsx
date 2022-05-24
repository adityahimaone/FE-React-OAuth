import React from "react";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import styles from "../assets/stylesheet/register.module.css";

function Login() {
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
            <div className="flex flex-col py-3">
              <ButtonPrimary>Sign In</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

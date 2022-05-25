import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isLoggedIn: false,
  email: "",
  role: "",
  name: "",
  accessToken: "",
};

export const authLogin = createSlice({
  name: "authLogin",
  initialState: initialValue,
  reducers: {
    setAuthLogin: (state, action) => {
      const { email, role, access_token } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.role = role;
      state.accessToken = access_token;
    },
    setAuthGoogleLogin: (state, action) => {
      const { name, email } = action.profileObj;
      const { accessToken } = action.token;
      const role = "Customer";
      state.isLoggedIn = true;
      state.email = email;
      state.name = name;
      state.role = role;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.email = "";
      state.role = "";
      state.accessToken = "";
    },
  },
});

export const { setAuthLogin, setAuthGoogleLogin, logout } = authLogin.actions;
export default authLogin.reducer;

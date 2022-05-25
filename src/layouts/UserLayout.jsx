import React from "react";
import Navbar from "../components/Header/Navbar";

function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default UserLayout;

import React from "react";
import "./comp.css";
import Logo from "../Auth/components/logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navhandler = useNavigate();
  const userToken = localStorage.getItem("accessToken");
  console.log(userToken);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        marginBottom: "3vw"
      }}
    >
      <Logo />
      <ul id="nav">
        <li onClick={() => Navhandler("/")}>Home</li>
        <li onClick={() => Navhandler("/sign-language")}>Sign Languages</li>
        <li onClick={() => Navhandler("/companies")}>Companies</li>
        {userToken ? (
          <li onClick={() => Navhandler("/profile")}>Profile</li>
        ) : (
          <li onClick={() => Navhandler("/login")}>Log In/Sign Up </li>
        )}
        {userToken && <li onClick={() =>{Navhandler("/login");localStorage.clear()}}>Log Out </li>}
      </ul>
    </div>
  );
};

export default Navbar;

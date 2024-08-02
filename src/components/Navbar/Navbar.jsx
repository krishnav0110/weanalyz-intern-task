import "./Navbar.css";

import LogoutIcon from "../../assets/logoutIcon.svg";

import { useContext } from "react";
import { Context } from "../../context/Context";




export default function Navbar() {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }





  return (
    <div className="navbar-con">
      <div className="navbar-title">Helpdesk</div>
      <div className="navbar-nav">
        <img src={LogoutIcon} alt="logout-icon" onClick={handleLogout} />
      </div>
    </div>
  );
}
import { users } from "../../data/data";
import "./Login.css";

import { useRef, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/Context";





export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = users.find(user => user.username === userRef.current.value);
      dispatch({type: "LOGIN_SUCCESS", payload: res});
      window.location.replace("/dashboard");
    } catch {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };



  

  return (
    <div className="login-page-con">
      <div className="login-con">
        <div className="login-title">Helpdesk System</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" className="login-input" placeholder="Username" ref={userRef} />
          <input type="password" className="login-input" placeholder="Password" ref={passwordRef} />
          <button className="login-btn" disabled={isFetching}>Sign In</button>
        </form>
        <div className="login-footer">
          <Link to="/forget-password" className="login-forget-pass">Forget Password</Link>
          <Link to="/register" className="login-signup-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
import "./Register.css";

import { Link } from "react-router-dom";





export default function Register() {
  return (
    <div className="register-page-con">
      <div className="register-con">
        <div className="register-title">Helpdesk System</div>
        <div className="register-subtitle">Sign Up Here</div>
        <form className="register-form">
          <input type="text" className="register-input" placeholder="Username" />
          <input type="password" className="register-input" placeholder="Password" />
          <input type="email" className="register-input" placeholder="Email" />
          <button className="register-btn">Sign Up</button>
        </form>
        <div className="register-footer">
          <Link to="/forget-password" className="register-forget-pass">Forget Password</Link>
          <Link to="/register" className="register-signup-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
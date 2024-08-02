import "./ForgetPassword.css";





export default function ForgetPassword() {
  return (
    <div className="forgetpass-page-con">
      <div className="forgetpass-con">
        <div className="forgetpass-title">
          Don't worry, Enter your email below and we will send you a link to change password.
        </div>
        <form className="forgetpass-form">
          <input type="email" className="forgetpass-input" placeholder="Email" />
          <button className="forgetpass-btn">Submit</button>
          <button className="forgetpass-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
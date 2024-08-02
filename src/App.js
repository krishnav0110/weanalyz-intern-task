import { users } from "./data/data";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { Context } from "./context/Context";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/Home/Home";





function App() {
  const usernames = users.map(user => user.username);

  const { user } = useContext(Context);

  return (
    <> 
      {window.location.pathname.split("/")[1] === "" &&
        <div className="usernames" onClick={(elem) => elem.currentTarget.style.display = "none"}>
          usernames:
          {usernames.map(username => {
            return <div>{username}</div>;
          })}
          Click me to close me :`)
        </div>
      }





      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={user ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
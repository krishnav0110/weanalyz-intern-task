import "./Home.css";

import { useContext } from "react";
import { Context } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import UserDashboard from "../../components/Dashboard/UserDashboard";
import OthersDashboard from "../../components/Dashboard/OthersDashboard";





export default function Home() {
  const { user } = useContext(Context);

  return (
    <div className="page-con">
      <Navbar />
      <div className="main-con">
        <Sidebar />
        {user.type === "user" ? <UserDashboard /> : <OthersDashboard />}
      </div>
      <Footer />
    </div>
  );
}
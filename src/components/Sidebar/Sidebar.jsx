import "./Sidebar.css";

import { NavLink } from "react-router-dom";





export default function Sidebar() {
  return (
    <div className="sidebar-con">
      <NavLink to="/dashboard" className="sidebar-links">Dashboard</NavLink>
      <NavLink to="/new-ticket" className="sidebar-links">New Ticket</NavLink>
      <NavLink to="/my-ticket" className="sidebar-links">My Ticket</NavLink>
    </div>
  );
}
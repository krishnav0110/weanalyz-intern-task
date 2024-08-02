import "./Dashboard.css";

import Tickets from "./Tickets/Tickets";
import Graph from "./Graph/Graph";
import Team from "./Team/Team";
import Feedback from "./Feedback/Feedback";





export default function OthersDashboard() {
  return (
    <div className="dashboard-con">
      <Tickets />
      <Graph />
      <div>
        <Team />
        <Feedback />
      </div>
    </div>
  );
}
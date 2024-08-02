import { users } from "../../../data/data";
import "./Team.css";

import TSIcon from "../../../assets/TSIcon.png";
import OTIcon from "../../../assets/OTIcon.png";





export default function Team({ gridArea }) {
  const techSupportCount = users.filter(user => user.type === "TS").length;
  const operationTeamCount = users.filter(user => user.type === "OT").length;





  return (
    <div className="dashboard-team-con" style={{gridArea: gridArea}}>
      <div className="dashboard-team">
        <img src={TSIcon} alt="" className="dashboard-team-img" />
        <div className="dashboard-team-count">{techSupportCount}</div>
        <div className="dashboard-team-title">Technical Supports</div>
      </div>

      <div className="dashboard-team">
        <img src={OTIcon} alt="" className="dashboard-team-img" />
        <div className="dashboard-team-count">{operationTeamCount}</div>
        <div className="dashboard-team-title">Operation Team</div>
      </div>
    </div>
  );
}
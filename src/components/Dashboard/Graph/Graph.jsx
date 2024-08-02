import { tickets } from "../../../data/data";
import "./Graph.css";





export default function Graph({ gridArea }) {
  return (
    <div className="dashboard-graph-con"  style={{gridArea: gridArea}}>
      <div className="dashboard-graph">
        {tickets.map(ticket => {
          return <div key={ticket.status} className="dashboard-graph-bar" style={{height: (ticket.count*10)+"px"}}></div>
        })}
      </div>
    </div>
  );
}
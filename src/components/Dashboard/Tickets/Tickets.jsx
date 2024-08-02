import { tickets } from "../../../data/data";
import "./Tickets.css";





export default function Tickets({ gridArea }) {
  const getTicketTitle = (ticketStatus) => {
    switch(ticketStatus) {
      case "total":
        return "Total Tickets";
      case "solved":
        return "Total Solved";
      case "waiting":
        return "Total Waiting Approval";
      case "progress":
        return "Total In Progress";
      default:
        return "Couldn't fetch ticket type";
    }
  };
  const getTicketColor = (ticketStatus) => {
    switch(ticketStatus) {
      case "total":
        return "#3066BE";
      case "solved":
        return "#0BFF68";
      case "waiting":
        return "#FE594E";
      case "progress":
        return "#FCFF6C";
      default:
        return "#fff";
    }
  };



  

  return (
    <div className="dashboard-tickets-con" style={{gridArea: gridArea}}>
      {tickets.map(ticket => {
        return (
          <div key={ticket.status} className="dashboard-ticket" style={{background: getTicketColor(ticket.status)}}>
            <div className="dashboard-ticket-title">{getTicketTitle(ticket.status)}</div>
            <div className="dashboard-ticket-count">{ticket.count}</div>
          </div>
        );
      })}
    </div>
  );
}
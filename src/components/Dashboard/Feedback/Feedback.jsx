import "./Feedback.css";

import { useState } from "react";

import starIcon from "../../../assets/starIcon.svg";
import starFillIcon from "../../../assets/starFillIcon.svg";





export default function Feedback({ gridArea }) {
  const [rating, setRating] = useState(0);





  return (
    <div className="dashboard-feedback-con" style={{gridArea: gridArea}}>
      <div className="dashboard-feedback-title">Customer Feedback</div>
      <div className="dashboard-feedback-rating-con">
        {[...Array(5)].map((_, i) => {
          return <img 
            key={i}
            src={rating<i ? starIcon : starFillIcon}
            alt="star-icon"
            className="dashboard-feedback-rating-img"
            onClick={()=>setRating(i)}
          />
        })}
      </div>
    </div>
  );
}
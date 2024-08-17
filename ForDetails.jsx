import React from "react";

function ForDetails({ onDetail }) {
  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{onDetail.name}</h3>
      <p>{onDetail.difficulty}</p>
      <p>{onDetail.instructions}</p>
    </div>
  );
}

export default ForDetails;

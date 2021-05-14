import React from "react";
import rocket from "../public/rocket.png";


function Loading(pros) {
  return (
    <div className="loading">
      <div className="sun">
        <img className="rocket" src={rocket} alt="rocket" />
      </div>
    </div>
  );
}

export default Loading;
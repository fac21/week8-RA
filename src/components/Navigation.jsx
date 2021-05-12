import React from "react";

function Navigation(props) {
  return (
    <nav>
      <button onClick={() => props.setPage("game")}>Game</button>
      <button onClick={() => props.setPage("profile")}>Profile</button>
      <p>{props.profile}</p>
    </nav>
  );
}

export default Navigation;

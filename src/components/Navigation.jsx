import React from "react";

function Navigation(props) {
  return (
    <nav>
      <button onClick={() => props.setPage("game")}>Game</button>
      <button onClick={() => props.setPage("profile")}>Profile</button>
      <button onClick={() => props.setPage("welcome")}>Reset User</button>
      <p>{props.profile}</p>
    </nav>
  );
}

export default Navigation;

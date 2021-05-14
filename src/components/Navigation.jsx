import React from "react";

function GameNavBar(props) {
  return (
    <>
      <button onClick={() => props.setPage("profile")}>Profile</button>
      <button onClick={() => props.setPage("welcome")}>Reset User</button>
    </>
  );
}

function ProfileNavBar(props) {
  return (
    <>
      <button onClick={() => props.setPage("game")}>Game</button>
      <button onClick={() => props.setPage("welcome")}>Reset User</button>
    </>
  );
}

function Navigation(props) {
  return (
    <nav>
      {props.page === "game" ? (
        <GameNavBar setPage={props.setPage} profile={props.profile} />
      ) : (
        ""
      )}
      {props.page === "profile" ? (
        <ProfileNavBar setPage={props.setPage} profile={props.profile} />
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navigation;

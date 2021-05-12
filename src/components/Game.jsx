import React from "react";
import Navigation from "./Navigation";
import Result from "./Result";

function Game(props) {
  const [result, setResult] = React.useState();
  return (
    <div className="game">
      <Navigation setPage={props.setPage} profile={props.profile}/>
      <h1>Game {props.profile}</h1>
      <Result result={result}/>
    </div>
  );
}

export default Game;

import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Game from "./components/Game";

function App() {
  const [page, setPage] = useState("welcome");
  const [profile, setProfile] = React.useState(null);

  return (
    <div className="App">
      {page === "welcome"? <Welcome setPage={setPage} profile={profile} setProfile={setProfile}/> : ""}
      {page === "profile"? <Profile  setPage={setPage} profile={profile} /> : ""}
      {page === "game"? <Game  setPage={setPage} profile={profile} /> : ""}
    </div>
  );
}

export default App;

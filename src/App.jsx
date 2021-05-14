import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Game from "./components/Game";
import Loading from "./components/Loading";

function App() {
  const [page, setPage] = useState("welcome");
  const [profile, setProfile] = React.useState(null);

  return (
    <div className="App flex-column stack-large">
      {page === "welcome"? <Welcome page={page} setPage={setPage} profile={profile} setProfile={setProfile}/> : ""}
      {page === "profile"? <Profile  page={page} setPage={setPage} profile={profile} /> : ""}
      {page === "game"? <Game  page={page} setPage={setPage} profile={profile} /> : ""}
      {page !== "game"?<Loading /> : ""}
    </div>
  );
}

export default App;

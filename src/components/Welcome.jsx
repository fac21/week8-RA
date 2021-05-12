import React from "react";

function Welcome(props) {
  function profile(event) {
    event.preventDefault();
    props.setProfile(event.target.profile.value);
    props.setPage("profile");
  }

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <form onSubmit={profile}>
        <label htmlFor="profile">Login in with your Github username:</label>
        <input type="search" name="profile" id="profile" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default Welcome;
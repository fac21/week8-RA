import React from "react";
import Profile from "./Profile";

function UserCard(props) {
  const twitterUrl = "https://twitter.com/";
  const twitterUsername = props.profileData.twitter_username;
  return (
    <div className="userCard">
      <h1>{props.profileData.name}</h1>
      <img src={props.profileData.avatar_url} alt="profile image" />
      {twitterUsername ? (
        <a href={twitterUrl + twitterUsername} target="blank">{"@" + twitterUsername}</a>
      ) : null}
    </div>
  );
}

export default UserCard;

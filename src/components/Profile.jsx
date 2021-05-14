import React from "react";
import Navigation from "./Navigation";
import Loading from "./Loading";
import UserCard from "./UserCard";

const USER_URL = "https://api.github.com/users/";

function Profile(props) {
  const [profileData, setProfileData] = React.useState(null);

  React.useEffect(() => {
    fetch(USER_URL + props.profile)
      .then((result) => result.json())
      .then((data) => {
        setProfileData(data)
      });
  }, [props.profile]);

  return (
    <div className="profile stack-large">
    <Navigation page={props.page} setPage={props.setPage} profile={props.profile} />
      {profileData ? <UserCard profileData={profileData} /> : ""}
      
    </div>
  );
}

export default Profile;

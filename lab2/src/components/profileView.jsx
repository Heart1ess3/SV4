import React from "react";
import Button from "./button";
import ProfileDetails from "./profileDetails";

function ProfileView({profile, onClick}) {
  const containerStyle = {
    textAlign: "left",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <ProfileDetails profile={profile}></ProfileDetails>
      <Button text={'Edit Profile'} onClick={onClick}></Button>
    </div>
  )
}

export default ProfileView;

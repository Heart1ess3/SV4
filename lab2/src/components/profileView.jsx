import React from "react";
import ProfileDetails from "./profileDetails";
import { Button, Box } from "@mui/material";

function ProfileView({ profile, onClick }) {
  const containerStyle = {
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    marginTop: "20px",
    width: "100%",
    textTransform: "none",
  };

  return (
    <Box sx={containerStyle}>
      <ProfileDetails profile={profile} />
      <Button variant="contained" style={buttonStyle} onClick={onClick}>
        EDIT
      </Button>
    </Box>
  );
}

export default ProfileView;

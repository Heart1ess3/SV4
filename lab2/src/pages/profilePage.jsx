import React, { useState } from "react";
import { Box } from "@mui/material";
import ProfileView from "../components/profileView";
import ProfileForm from "../components/profileForm";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    description: "",
    city: "",
    age: undefined,
    meal: "",
    occupation: "",
    hobbies: "",
    relationshipStatus: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const styles = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9"
  };

  return (
    <Box sx={styles}>
      {!isEditing ? (
        <ProfileView profile={profile} onClick={() => setIsEditing(true)} />
      ) : (
        <ProfileForm profile={profile} handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
    </Box>
  );
};

export default ProfilePage;

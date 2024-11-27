import React from "react";
import { Box, Typography } from "@mui/material";

function ProfileDetails({ profile }) {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    profileInfo: {
      display: 'grid',
      gap: '10px',
      textAlign: 'left',
    },
    title: {
      textAlign: 'center',
      color: '#007bff',
    },
  };

  const profileFields = [
    { label: 'First Name', value: profile.firstName },
    { label: 'Last Name', value: profile.lastName },
    { label: 'Nickname', value: profile.nickname },
    { label: 'Description', value: profile.description },
    { label: 'City', value: profile.city },
    { label: 'Age', value: profile.age },
    { label: 'Favourite meal', value: profile.meal },
    { label: 'Occupation', value: profile.occupation },
    { label: 'Hobbies', value: profile.hobbies },
    { label: 'Relationship Status', value: profile.relationshipStatus },
  ];

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={{ fontSize: '32px', ...styles.title }}>
        Profile Page
      </Typography>
      <Box sx={styles.profileInfo}>
        {profileFields.map(({ label, value }) => (
          <Typography key={label}>
            <strong>{label}:</strong> {value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileDetails;

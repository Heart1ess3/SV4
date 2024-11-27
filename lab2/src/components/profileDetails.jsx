import React from "react";

function ProfileDetails({profile}) {
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
    }
  };

  return (
    <div  style={styles.container}>
      <h1 style={styles.title}>Profile Page</h1>
      <div style={styles.profileInfo}>
        <p><strong>First Name:</strong> {profile.firstName}</p>
        <p><strong>Last Name:</strong> {profile.lastName}</p>
        <p><strong>Nickname:</strong> {profile.nickname}</p>
        <p><strong>Description:</strong> {profile.description}</p>
        <p><strong>City:</strong> {profile.city}</p>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Favourite meal:</strong> {profile.meal}</p>
        <p><strong>Occupation:</strong> {profile.occupation}</p>
        <p><strong>Hobbies:</strong> {profile.hobbies}</p>
        <p><strong>Relationship Status:</strong> {profile.relationshipStatus}</p>
      </div>
  </div>
  );
}

export default ProfileDetails;

import React from "react";
import Button from "./button";
import InputField from "./inputField"

function ProfileForm({ profile, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <InputField
        label="First Name"
        name="firstName"
        type="text"
        value={profile.firstName}
        onChange={handleChange}
      />
      <InputField
        label="Last Name"
        name="lastName"
        type="text"
        value={profile.lastName}
        onChange={handleChange}
      />
      <InputField
        label="Description"
        name="description"
        type="text"
        value={profile.description}
        onChange={handleChange}
      />
      <InputField
        label="Nickname"
        name="nickname"
        type="text"
        value={profile.nickname}
        onChange={handleChange}
      />
      <InputField
        label="City"
        name="city"
        type="text"
        value={profile.city}
        onChange={handleChange}
      />
      <InputField
        label="Age"
        name="age"
        type="number"
        value={profile.age}
        onChange={handleChange}
      />
      <InputField
        label="Favourite meal"
        name="meal"
        type="text"
        value={profile.meal}
        onChange={handleChange}
      />
      <InputField
        label="Occupation"
        name="occupation"
        type="text"
        value={profile.occupation}
        onChange={handleChange}
      />
      <InputField
        label="Hobbies"
        name="hobbies"
        type="text"
        value={profile.hobbies}
        onChange={handleChange}
      />
      <InputField
        label="Relationship Status"
        name="relationshipStatus"
        type="text"
        value={profile.relationshipStatus}
        onChange={handleChange}
      />
      <Button text={"Save Changes"} type={"submit"}></Button>
    </form>
  )
}

export default ProfileForm;

import React from "react";

function InputField({ label, type, name, value, onChange }) {
  const style = {
    padding: "10px",
    marginTop: "5px",
    marginBottom: "10px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  }

  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={style}
      />
    </label>
  );
}

export default InputField;

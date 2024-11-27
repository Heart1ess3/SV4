import React from "react";

function Button({text, type, onClick}) {
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    display: "block",
    width: "100%",
  };

  return (
    <button type={type} style={ buttonStyle } onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;

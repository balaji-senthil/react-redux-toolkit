import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const fontColor = useSelector((state) => state.fontColor.value);

  return (
    <div style={{ color: fontColor }}>
      <h1> Profile Page</h1>
      <p> Name: {user.userName} </p>
      <p> Age: {user.age}</p>
      <p> Email: {user.email}</p>
    </div>
  );
}

export default Profile;
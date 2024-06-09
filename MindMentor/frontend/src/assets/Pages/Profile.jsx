import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/CSS/Profile.css";
const Profile = () => {
  return (
    <div className="profile">
        <div className="nav">
            <Navbar />
        </div>
        <div className="user-bio">
            <h2>WELCOME, JIYA ROSE JOSHY</h2>
        </div>
    </div>
  );
};

export default Profile;

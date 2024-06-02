<<<<<<< HEAD
import React from "react";
import Navbar from "../Components/Navbar";
const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <h1>Profile page</h1>
    </div>
  );
=======
import React from 'react';
import Navbar from '../Components/Navbar';
import '../Components/CSS/Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            {/* <nav>
                <Navbar/>
            </nav> */}
            <div className="profile-card">
                <h2>PROFILE</h2>
            </div>
        </div>

    );
};

export default Profile;

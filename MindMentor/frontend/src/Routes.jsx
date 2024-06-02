import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Profile from "./assets/Pages/Profile";
import Chat from "./assets/Pages/Chat";
import Task from "./assets/Pages/Task";
import Login from "./assets/Pages/Login";
const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

<<<<<<< HEAD
  const handleLogin = (username) => {
    // Perform any additional login logic here
    setIsLoggedIn(true);
  };
  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />} /> */}
        <Route
          path="/chat"
          element={isLoggedIn ? <Chat /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/tasks"
          element={isLoggedIn ? <Task /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
=======
    const handleLogin = (username) => {
        // Perform any additional login logic here
        setIsLoggedIn(true);
    };
    return (
        <Router>
            {isLoggedIn && <Navbar />}
            <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                {/* <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />} /> */}
                <Route path="/" element={<Profile/>}/>
                <Route path="/chat" element={isLoggedIn ? <Chat /> : <Login onLogin={handleLogin} />} />
                <Route path="/tasks" element={isLoggedIn ? <Task /> : <Login onLogin={handleLogin} />} />
            </Routes>
        </Router>
    );
>>>>>>> c4e20e8d5b202be674828b771cc3c2f7d71b28b8
};

export default AppRoutes;

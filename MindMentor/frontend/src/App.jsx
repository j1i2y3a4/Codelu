import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Profile from "./assets/Pages/Profile";
import Chat from "./assets/Pages/Chat";
import Task from "./assets/Pages/Task";
import Login from "./assets/Pages/Login";
import "./App.css"

const App = () => {
    return (
        <Router className="app">
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/tasks" element={<Task />}/>
            </Routes>
        </Router>
    );
};

export default App;
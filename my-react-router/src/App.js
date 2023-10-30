import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UsersList from "./UsersList";
import AlbumList from "./AlbumList";
import PhotoList from "./PhotoList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotoList />} />
            </Routes>
        </Router>
    );
}

export default App;

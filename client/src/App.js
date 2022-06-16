import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupsPage from './pages/groups/groups';
import HomePage from './pages/home/home';
import ProfilePage from './pages/profile/profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/:tab" element={<ProfilePage />} />
                <Route path="/groups" element={<GroupsPage />} />
            </Routes>
        </Router>
    )
}

export default App;

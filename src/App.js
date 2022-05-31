import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import ProfilePage from './pages/profile/profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/profil" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default App;

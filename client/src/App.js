import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GroupsPage from './pages/groups/groups';
import HomePage from './pages/home/home';
import ProfilePage from './pages/profile/profile';
import LoginPage from './pages/login';
import { UserProvider } from './context/user-context';
import { NonAuthRoute } from './router/NonAuth';
import { ProtectedRoute } from './router/Protected';

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={
                        <NonAuthRoute>
                            <LoginPage />
                        </NonAuthRoute>
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile/:tab" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="/groups" element={
                        <ProtectedRoute>
                            <GroupsPage />
                        </ProtectedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;

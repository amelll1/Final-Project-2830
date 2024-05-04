import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PlaylistPage from './PlaylistPage';
import { AuthProvider } from './AuthContext'; // Ensure this path is correct

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/playlist" element={<PlaylistPage />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './containers/AdminPanel';
import ClientPanel from './containers/ClientPanel';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClientPanel />} />
                <Route path="/admin/*" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
};

export default App;

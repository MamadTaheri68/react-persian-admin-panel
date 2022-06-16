import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
};

export default WebRoutes;
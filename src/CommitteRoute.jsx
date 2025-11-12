import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Committees from './pages/Committees';
import CommitteeDetail from './pages/CommitteeDetail';

/**
 * Routes configuration for Committee pages
 */
const CommitteeRoutes = () => {
  return (
    <Routes>
      <Route path="/about/committees" element={<Committees />} />
      <Route path="/about/committees/:id" element={<CommitteeDetail />} />
    </Routes>
  );
};

export default CommitteeRoutes;
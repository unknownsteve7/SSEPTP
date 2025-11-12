import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Dashboard from './pages/Dashboard';
import Programmes from './pages/Programmes';
import UndergraduateProgrammes from './pages/UndergraduateProgrammes';
import AdmissionsOverview from './pages/AdmissionsOverview';
import AdmissionProcess from './pages/AdmissionProcess';
import FeeStructure from './pages/FeeStructure';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import LifeAtSSE from './pages/LifeAtSSE';
import AcademicFacilities from './pages/AcademicFacilities';
import CampusFacilities from './pages/CampusFacilities';
import HealthSafety from './pages/HealthSafety';
import SSESports from './pages/SSESports';
import Committees from './pages/Committees';
import CommitteeDetail from './pages/CommitteeDetail';
import College from './pages/College';

/**
 * Main application routes
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Programmes */}
        <Route path="/programmes/all" element={<Programmes />} />
        <Route path="/programmes/undergraduate" element={<UndergraduateProgrammes />} />
        
        {/* Admissions */}
        <Route path="/admissions/overview" element={<AdmissionsOverview />} />
        <Route path="/admissions/admissionprocess" element={<AdmissionProcess />} />
        <Route path="/admissions/fees" element={<FeeStructure />} />
        <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
        
        {/* Campus Life */}
        <Route path="/life/overview" element={<LifeAtSSE />} />
        <Route path="/life/academic-facilities" element={<AcademicFacilities />} />
        <Route path="/life/campus-facilities" element={<CampusFacilities />} />
        <Route path="/life/health-safety" element={<HealthSafety />} />
        <Route path="/life/sports" element={<SSESports />} />
        
        {/* About */}
        <Route path="/about/college" element={<College />} />
        <Route path="/about/committees" element={<Committees />} />
        <Route path="/about/committees/:id" element={<CommitteeDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Programmes from './pages/Programmes';
import Sidebar from './components/layout/Sidebar';
import UndergraduateProgrammes from './pages/UndergraduateProgrammes';
import AdmissionsOverview from './pages/AdmissionsOverview';

// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import custom CSS last to override Bootstrap when needed
import './styles/custom.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AdmissionProcess from './pages/AdmissionProcess';
import FeeStructure from './pages/FeeStructure';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import LifeAtSSE from './pages/LifeAtSSE';
import AcademicFacilities from './pages/AcademicFacilities';
import CampusFacilities from './pages/CampusFacilities';
import HealthSafety from './pages/HealthSafety';
import SSESports from './pages/SSESports';
import College from './pages/College';
import Leadership from './pages/Leadership';
import Committees from './pages/Committes';
import NAAC from './pages/NAAC';
import CommitteeDetail from './pages/CommitteDetail';
import Courses from './pages/Academics';
import HostelLife from './pages/HostelLife';
import Scholarship from './pages/Scholarships';
import Laboratory from './pages/Laboratory';
import PlacementSuccessStories from './pages/PlacementSuccessStories';
import Placements from './pages/Placement';

// Import new pages
import OurHeritage from './pages/OurHeritage';
import VisionMission from './pages/VisionMission';
import ChairmanMessage from './pages/ChairmanMessage';
import DeanMessage from './pages/DeanMessage';
import PrincipalMessage from './pages/PrincipalMessage';
import IndustryInterface from './pages/IndustryInterface';
import Recognition from './pages/Recognition';
import GoverningBody from './pages/GoverningBody';
import ResearchOverview from './pages/ResearchOverview';
import ResearchAchievements from './pages/ResearchAchievements';
import ResearchPublications from './pages/ResearchPublications';
import ScrollToTop from './components/common/ScrollToTop';
import RIT from './pages/RIT';
import FacultyDepartmentCSE from './pages/FacultyDepartmentCSE';
import FacultyDepartmentECE from './pages/FacultyDepartmentECE';
import FacultyEEE from './pages/FacultyEEE';
import FacultyCivil from './pages/CivilFaculty';
import FacultyMechanical from './pages/FacultyMechanical';
import FacultyHumanities from './pages/FacultyHumanities';
import IQAC from './pages/IQAC';
import MTechProgrammes from './pages/MTechProgrammes';
import SecretaryMessage from './pages/SecrataryMessage';
import CSEProgramme from './pages/CSE';
import AdmissionForm from './pages/AdmissionForm';

/**
 * Main App component
 */
const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Simulate initial page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Track scroll position for UI elements that change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <div className="preloader d-flex justify-content-center align-items-center position-fixed w-100 h-100 bg-white" style={{ zIndex: 9999 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Main content area */}
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Homepage scrollPosition={scrollPosition} />} />
              <Route path="/programmes/all" element={<Programmes />} />
              <Route path="/programmes/undergraduate" element={<UndergraduateProgrammes />} />
              <Route path="/programmes/mtech" element={<MTechProgrammes />} />
              <Route path="/programmes/cse" element={<CSEProgramme />} />

              <Route path="/admissions/overview" element={<AdmissionsOverview />} />
              <Route path="/admissions/admissionprocess" element={<AdmissionProcess />} />
              <Route path="/admissions/fees" element={<FeeStructure />} />
              <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
              <Route path="/admissions/admissionform" element={<AdmissionForm />} />

              <Route path="/life/overview" element={<LifeAtSSE />} />
              <Route path="/life/academic-facilities" element={<AcademicFacilities />} />
              <Route path="/life/campus-facilities" element={<CampusFacilities />} />
              <Route path="/life/health-safety" element={<HealthSafety />} />
              <Route path="/life/sports" element={<SSESports />} />
              <Route path="/life/hostel-life" element={<HostelLife />} />
              <Route path="/about/college" element={<College />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/committees" element={<Committees />} />
              <Route path="/about/naac" element={<NAAC />} />
              <Route path="/about/committees/:id" element={<CommitteeDetail />} />
              
              <Route path="/academics/courses" element={<Courses />} />
              <Route path="/academics/scholarship" element={<Scholarship />} /> 
              <Route path="/academics/labs" element={<Laboratory />} />
              <Route path="/placement/placement-success" element={<PlacementSuccessStories />} />
              <Route path="/placement/placement" element={<Placements />} />
              <Route path="research/overview" element={<ResearchOverview />} />
              <Route path="research/publications" element={<ResearchPublications />} />
              <Route path="research/achievements" element={<ResearchAchievements />} />
              <Route path="/rit" element={<RIT />} />
              <Route path="/faculty-cse" element={<FacultyDepartmentCSE />} />
              <Route path="/faculty-ece" element={<FacultyDepartmentECE />} />
              <Route path="/faculty-eee" element={<FacultyEEE /> } />
              <Route path="/faculty-civil" element={<FacultyCivil /> } />
              <Route path="/faculty-mech" element={<FacultyMechanical /> } />
              <Route path="/faculty-humanities" element={<FacultyHumanities />} />
              <Route path="/iqac" element={<IQAC /> } />

              {/* New routes for the quick links pages */}
              <Route path="/about/heritage" element={<OurHeritage />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/chairman-message" element={<ChairmanMessage />} />
              <Route path="/about/dean-message" element={<DeanMessage />} />
              <Route path="/about/principal-message" element={<PrincipalMessage />} />
              <Route path="/about/secretary-message" element={<SecretaryMessage />} />
              <Route path="/about/industry-interface" element={<IndustryInterface />} />
              <Route path="/about/recognition" element={<Recognition />} />              
            </Routes>
          </div>
          
          {/* Sidebar is global and floats on top of main content */}
          <Sidebar />
        </>
      )}
    </Router>
  );
};

export default App;
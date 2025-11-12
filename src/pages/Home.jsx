import React from 'react';
import Navbar from '../components/layout/Navbar';
import MainCarousel from '../components/carousels/MainCarousel';
import AboutSection from '../components/sections/AboutSection';
import LifeAtSSE from '../components/sections/LifeAtSSE';
import FacultySection from '../components/sections/FacultySection';
import PlacementSection from '../components/sections/PlacementSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AnnouncementsSection from '../components/sections/AnnouncementsSection';
import CampusGallery from '../components/carousels/CampusGallery';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// added css to custom css file
/**
 * Homepage component - assembles page sections
 */
const Homepage = ({ scrollPosition }) => {
  

  const announcements = [
    { id: 1, title: 'Admissions Open for 2025-26', date: 'April 5, 2025' },
    { id: 2, title: 'Technical Symposium - TechnoEdge 2025', date: 'April 20, 2025' },
    { id: 3, title: 'Campus Recruitment Drive by TCS', date: 'May 10, 2025' },
    { id: 4, title: 'National Conference on Emerging Technologies', date: 'June 15, 2025' }
  ];

  const stats = [
    { id: 1, value: '95%', label: 'Placement Rate' },
    { id: 2, value: '50+', label: 'Recruiting Companies' },
    { id: 3, value: '150+', label: 'Faculty Members' },
    { id: 4, value: '15', label: 'Research Centers' }
  ];

  return (
    <div className="homepage">
      {/* Navigation */}
      <Navbar scrollPosition={scrollPosition} />

      {/* Main Carousel */}
      <MainCarousel />
      
      {/* Life at SSE Section */}
      <LifeAtSSE />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Placement Section */}
      <PlacementSection stats={stats} />
      
      {/* Faculty Section */}
      {/* <FacultySection /> */}
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Announcements & Campus Life Section */}
      <AnnouncementsSection announcements={announcements} />
      
      {/* Campus Gallery */}
      <CampusGallery />
      
      {/* Call-to-Action Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

/**
 * Placement Success Stories page component - Simplified Version
 */
const PlacementSuccessStories = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter categories
  const filters = [
    { id: 'all', name: 'All Stories' },
  ];

  // Success stories data - simplified
  const successStories = [
    {
      id: 1,
      name: 'Rahul Sharma',
      batch: '2023',
      program: 'Computer Science & Engineering',
      company: 'Microsoft',
      position: 'Software Development Engineer',
      package: '34 LPA',
      category: ['tech', 'high'],
      image: 'https://via.placeholder.com/300?text=Rahul',
      quote: 'The rigorous curriculum and placement training at SSE helped me secure my dream job at Microsoft.'
    },
    {
      id: 2,
      name: 'Priya Patel',
      batch: '2023',
      program: 'Information Technology',
      company: 'Infosys',
      position: 'Systems Engineer',
      package: '12.5 LPA',
      category: ['tech'],
      image: 'https://via.placeholder.com/300?text=Priya',
      quote: 'The practical exposure and industry-focused training at SSE gave me a competitive edge during placements.'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      batch: '2023',
      program: 'Electronics & Communication',
      company: 'Qualcomm',
      position: 'Design Engineer',
      package: '28 LPA',
      category: ['tech', 'high'],
      image: 'https://via.placeholder.com/300?text=Amit',
      quote: 'The advanced labs and hands-on experience in VLSI design prepared me for my role at Qualcomm.'
    },
    {
      id: 4,
      name: 'Deepa Reddy',
      batch: '2024',
      program: 'Electrical Engineering',
      company: 'Siemens',
      position: 'Graduate Engineer Trainee',
      package: '18.5 LPA',
      category: ['core'],
      image: 'https://via.placeholder.com/300?text=Deepa',
      quote: 'The focus on power systems and industrial automation perfectly aligned with industry requirements.'
    },
    {
      id: 5,
      name: 'Vikas Singh',
      batch: '2024',
      program: 'Mechanical Engineering',
      company: 'Tata Motors',
      position: 'Graduate Engineer',
      package: '16.8 LPA',
      category: ['core'],
      image: 'https://via.placeholder.com/300?text=Vikas',
      quote: 'The project-based learning approach helped me develop problem-solving skills valued by employers.'
    },
    {
      id: 6,
      name: 'Arjun Nair',
      batch: '2025',
      program: 'Computer Science & Engineering',
      company: 'Amazon',
      position: 'Software Development Engineer',
      package: '36 LPA',
      category: ['tech', 'high'],
      image: 'https://via.placeholder.com/300?text=Arjun',
      quote: 'The data structures and algorithms courses built a strong foundation for my technical skills.'
    }
  ];

  // Filter stories based on active filter
  const filteredStories = activeFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.category.includes(activeFilter));

  return (
    <div className="placement-success-stories-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>Success Stories</h1>
              <p>
                Our students achieving career success through SSE
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Overview */}
      <section className="py-5 bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Student Achievements"
            title="Placement Success Stories"
            description="Discover how our students transformed their education into thriving careers"
            centered={true}
          />
          
          {/* Filter Options */}
          <div className="mb-5 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`btn ${activeFilter === filter.id ? 'btn-primary' : 'btn-outline-primary'} mb-2`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Success Stories Grid */}
          <div className="row g-4">
            {filteredStories.map(story => (
              <div key={story.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm border-0 hover-translate-y">
                  <div className="card-body p-0">
                  
                    <div className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="h5 mb-0">{story.name}</h3>
                        <small className="text-muted">Batch {story.batch}</small>
                      </div>
                      <p className="mb-3 small text-muted">{story.program}</p>
                      <div className="mb-3 pb-3 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-building text-primary me-2"></i>
                          <span className="fw-medium">{story.position}, {story.company}</span>
                        </div>
                      </div>
                      <p className="card-text fst-italic">"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Highlights */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="display-3 fw-bold mb-3 text-primary">1675</div>
                  <h4 className="mb-0">Total Offers</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="display-3 fw-bold mb-3 text-primary">36 LPA</div>
                  <h4 className="mb-0">Highest Package</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="display-3 fw-bold mb-3 text-primary">7.5 LPA</div>
                  <h4 className="mb-0">Average Package</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="display-3 fw-bold mb-3 text-primary">150</div>
                  <h4 className="mb-0">Recruiting Companies</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Companies */}
      <section className="py-5 bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Our Recruiters"
            title="Top Companies"
            description="Leading organizations that recruit our talented graduates"
            centered={true}
          />
          
          <div className="row g-4 justify-content-center">
            {[
              'TCS', 'Infosys', 'Microsoft', 'Amazon', 'Wipro', 
              'Accenture', 'L&T', 'Cognizant'
            ].map((company, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card shadow-sm text-center p-4 h-100">
                  <div className="py-3">
                    <span className="h5">{company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PlacementSuccessStories;
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Contact from '../components/common/Contact';
import computerLabFocused from '../assets/computerLabFocused.jpg';

/**
 * MTech Programmes page component
 * Displays information about postgraduate engineering programmes
 */
function MTechProgrammes  ()  {
  // State to track which program is selected for details view
  const [selectedProgram, setSelectedProgram] = useState(null);

  // MTech programmes offered by SSE
  const programmes = [
    {
      id: 1,
      title: 'Computer Science & Engineering',
      code: 'CSE',
      icon: 'fas fa-laptop-code',
      color: '#1D9DD9',
      shortDescription: 'Advanced study in algorithms, AI/ML, data science, and computer systems architecture.',
      specializations: ['Artificial Intelligence & Machine Learning', 'Data Science', 'Computer Networks', 'Cloud Computing'],
      duration: '2 Years',
      seats: 18,
      eligibility: 'B.Tech/B.E in CSE or equivalent with minimum 60% marks (55% for reserved categories)'
    },
    {
      id: 2,
      title: 'Electronics & Communication',
      code: 'ECE',
      icon: 'fas fa-microchip',
      color: '#F9843D',
      shortDescription: 'Specialized focus on VLSI design, embedded systems, signal processing, and communication networks.',
      specializations: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'Wireless Communication'],
      duration: '2 Years',
      seats: 18,
      eligibility: 'B.Tech/B.E in ECE or equivalent with minimum 60% marks (55% for reserved categories)'
    },
    {
      id: 3,
      title: 'Electrical Engineering',
      code: 'EE',
      icon: 'fas fa-bolt',
      color: '#E04084',
      shortDescription: 'Advanced research in power systems, smart grid, power electronics, and renewable energy.',
      specializations: ['Power Systems', 'Power Electronics', 'Smart Grid Technologies', 'Renewable Energy Systems'],
      duration: '2 Years',
      seats: 18,
      eligibility: 'B.Tech/B.E in EE/EEE or equivalent with minimum 60% marks (55% for reserved categories)'
    }
  ];

  // Handle program selection for detailed view
  const handleProgramSelect = (programId) => {
    if (selectedProgram === programId) {
      setSelectedProgram(null); // Toggle off if already selected
    } else {
      setSelectedProgram(programId);
      // Scroll to the details section with smooth behavior
      setTimeout(() => {
        document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Get the selected program data
  const selectedProgramData = programmes.find(program => program.id === selectedProgram);

  return (
    <div className="mtech-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header mb-0">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">Postgraduate Programmes</h1>
              <p className="lead text-white opacity-90">Explore our M.Tech programmes designed for specialized training and advanced research.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h5 className="text-primary text-uppercase fw-semibold mb-2">Advanced Education</h5>
                <h2 className="fw-bold mb-4">Master of Technology (M.Tech)</h2>
                <p className="mb-4">The M.Tech programmes at Sanskriti School of Engineering offer advanced, specialized education with emphasis on research and innovation. Our postgraduate courses are designed to create specialists and researchers ready to tackle complex engineering challenges.</p>
                
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Research-Oriented Curriculum</h5>
                      <p className="mb-0 text-muted">Focus on advanced topics and research methodologies</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Specialized Labs</h5>
                      <p className="mb-0 text-muted">Access to cutting-edge research facilities</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Industry Collaboration</h5>
                      <p className="mb-0 text-muted">Research projects in partnership with leading organizations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow">
                <img src={computerLabFocused} alt="M.Tech Students" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programmes Overview */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            subtitle="Our Programmes"
            title="M.Tech Specializations"
            description="Select a programme to view detailed information"
            centered={true}
          />
          
          <div className="row g-4">
            {programmes.map(program => (
              <div key={program.id} className="col-md-6 col-lg-4 mb-4">
                <div 
                  className={`card h-100 program-card shadow-sm ${selectedProgram === program.id ? 'program-card-selected' : ''}`} 
                  onClick={() => handleProgramSelect(program.id)}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="program-icon me-3" style={{ backgroundColor: program.color }}>
                        <i className={program.icon}></i>
                      </div>
                      <div>
                        <span className="program-code">{program.code}</span>
                        <h3 className="program-title">{program.title}</h3>
                      </div>
                    </div>
                    <p className="card-text mb-4">{program.shortDescription}</p>
                    
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-clock text-muted me-2"></i>
                        <span className="text-muted">{program.duration}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user-graduate text-muted me-2"></i>
                        <span className="text-muted">{program.seats} Seats</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <button className="btn btn-primary w-100">
                        {selectedProgram === program.id ? 'Selected' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Programme Details */}
      {selectedProgramData && (
        <section id="program-details" className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow">
                  <div className="card-header program-header py-4" style={{ backgroundColor: selectedProgramData.color }}>
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <h2 className="text-white mb-1">{selectedProgramData.title} (M.Tech)</h2>
                          <p className="text-white mb-0 opacity-80">Master of Technology in {selectedProgramData.title}</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                          <span className="badge bg-light text-dark fs-5 program-code-badge">{selectedProgramData.code}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body p-4">
                    {/* Program Info */}
                    <div className="mb-4">
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Duration</h4>
                              <p className="mb-0">{selectedProgramData.duration}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Seats</h4>
                              <p className="mb-0">{selectedProgramData.seats} per year</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Eligibility</h4>
                              <p className="mb-0">{selectedProgramData.eligibility}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Specializations */}
                    <div className="mb-4">
                      <h3 className="mb-3">Specializations Offered</h3>
                      <div className="row g-3">
                        {selectedProgramData.specializations.map((specialization, index) => (
                          <div key={index} className="col-md-6">
                            <div className="d-flex align-items-center bg-light p-3 rounded">
                              <i className="fas fa-graduation-cap text-primary me-3"></i>
                              <span>{specialization}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="text-center mt-5">
                      <h4 className="mb-4">Interested in this programme?</h4>
                      <Button 
                        variant="cta-primary"
                        text="Apply Now for 2025-26"
                        href="/admissions/enquiry"
                        icon="fas fa-arrow-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Admission Requirements */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            subtitle="Admissions"
            title="M.Tech Admission Requirements"
            description="General requirements for all M.Tech programmes"
            centered={true}
          />
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h3 className="mb-4">Eligibility Criteria</h3>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>B.Tech/B.E in relevant discipline with minimum 60% marks (55% for reserved categories)</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Valid GATE score preferred (Non-GATE candidates may also apply)</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Sponsorship from an organization is an advantage</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">Selection Process</h3>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>GATE score based admission for GATE qualified candidates</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Written test and interview for non-GATE candidates</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Final selection based on overall merit and availability of seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MTechProgrammes;
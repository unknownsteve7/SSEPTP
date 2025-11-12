import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";

/**
 * NAAC page component
 * Displays information about SSE's NAAC accreditation
 */
const NAAC = () => {
  // Documents related to NAAC
  const naacDocuments = [
    { 
      title: "Self Study Report (SSR)", 
      description: "Comprehensive report submitted to NAAC for assessment",
      link: "/downloads/naac-ssr-report.pdf" 
    },
    { 
      title: "NAAC Certificate", 
      description: "Official accreditation certificate from NAAC",
      link: "/downloads/naac-certificate.pdf" 
    },
    { 
      title: "Peer Team Report", 
      description: "Evaluation report by NAAC Peer Team",
      link: "/downloads/naac-peer-team-report.pdf" 
    },
    { 
      title: "Annual Quality Assurance Report", 
      description: "Latest AQAR submitted to NAAC",
      link: "/downloads/naac-aqar-report.pdf" 
    }
  ];

  // NAAC Criteria with detailed sub-criteria and supporting documents
  const naacCriteria = [
    {
      id: 1,
      title: "Criteria 1",
      name: "Curricular Aspects",
      subcriteria: [
        {
          id: "1.1",
          name: "Curriculum Planning and Implementation",
          documents: "/downloads/criteria1.1-documents.pdf"
        },
        {
          id: "1.2",
          name: "Academic Flexibility",
          documents: "/downloads/criteria1.2-documents.pdf"
        },
        {
          id: "1.3",
          name: "Curriculum Enrichment",
          documents: "/downloads/criteria1.3-documents.pdf"
        },
        {
          id: "1.4",
          name: "Feedback System",
          documents: "/downloads/criteria1.4-documents.pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Criteria 2",
      name: "Teaching-learning & Evaluation",
      subcriteria: [
        {
          id: "2.1",
          name: "Student Enrollment and Profile",
          documents: "/downloads/criteria2.1-documents.pdf"
        },
        {
          id: "2.2",
          name: "Catering to Student Diversity",
          documents: "/downloads/criteria2.2-documents.pdf"
        },
        {
          id: "2.3",
          name: "Teaching-Learning Process",
          documents: "/downloads/criteria2.3-documents.pdf"
        },
        {
          id: "2.4",
          name: "Teacher Profile and Quality",
          documents: "/downloads/criteria2.4-documents.pdf"
        },
        {
          id: "2.5",
          name: "Evaluation Process and Reforms",
          documents: "/downloads/criteria2.5-documents.pdf"
        },
        {
          id: "2.6",
          name: "Student Performance and Learning Outcomes",
          documents: "/downloads/criteria2.6-documents.pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Criteria 3",
      name: "Research, Innovations & Extension",
      subcriteria: [
        {
          id: "3.1",
          name: "Resource Mobilization for Research",
          documents: "/downloads/criteria3.1-documents.pdf"
        },
        {
          id: "3.2",
          name: "Innovation Ecosystem",
          documents: "/downloads/criteria3.2-documents.pdf"
        },
        {
          id: "3.3",
          name: "Research Publications and Awards",
          documents: "/downloads/criteria3.3-documents.pdf"
        },
        {
          id: "3.4",
          name: "Extension Activities",
          documents: "/downloads/criteria3.4-documents.pdf"
        },
        {
          id: "3.5",
          name: "Collaboration",
          documents: "/downloads/criteria3.5-documents.pdf"
        }
      ]
    },
    {
      id: 4,
      title: "Criteria 4",
      name: "Infrastructure & Learning Resources",
      subcriteria: [
        {
          id: "4.1",
          name: "Physical Facilities",
          documents: "/downloads/criteria4.1-documents.pdf"
        },
        {
          id: "4.2",
          name: "Library as a Learning Resource",
          documents: "/downloads/criteria4.2-documents.pdf"
        },
        {
          id: "4.3",
          name: "IT Infrastructure",
          documents: "/downloads/criteria4.3-documents.pdf"
        },
        {
          id: "4.4",
          name: "Maintenance of Campus Infrastructure",
          documents: "/downloads/criteria4.4-documents.pdf"
        }
      ]
    },
    {
      id: 5,
      title: "Criteria 5",
      name: "Student Support & Progression",
      subcriteria: [
        {
          id: "5.1",
          name: "Student Support",
          documents: "/downloads/criteria5.1-documents.pdf"
        },
        {
          id: "5.2",
          name: "Student Progression",
          documents: "/downloads/criteria5.2-documents.pdf"
        },
        {
          id: "5.3",
          name: "Student Participation and Activities",
          documents: "/downloads/criteria5.3-documents.pdf"
        },
        {
          id: "5.4",
          name: "Alumni Engagement",
          documents: "/downloads/criteria5.4-documents.pdf"
        }
      ]
    },
    {
      id: 6,
      title: "Criteria 6",
      name: "Governance, Leadership & Management",
      subcriteria: [
        {
          id: "6.1",
          name: "Institutional Vision and Leadership",
          documents: "/downloads/criteria6.1-documents.pdf"
        },
        {
          id: "6.2",
          name: "Strategy Development and Deployment",
          documents: "/downloads/criteria6.2-documents.pdf"
        },
        {
          id: "6.3",
          name: "Faculty Empowerment Strategies",
          documents: "/downloads/criteria6.3-documents.pdf"
        },
        {
          id: "6.4",
          name: "Financial Management and Resource Mobilization",
          documents: "/downloads/criteria6.4-documents.pdf"
        },
        {
          id: "6.5",
          name: "Internal Quality Assurance System",
          documents: "/downloads/criteria6.5-documents.pdf"
        }
      ]
    },
    {
      id: 7,
      title: "Criteria 7",
      name: "Institutional Values & Best Practices",
      subcriteria: [
        {
          id: "7.1",
          name: "Institutional Values and Social Responsibilities",
          documents: "/downloads/criteria7.1-documents.pdf"
        },
        {
          id: "7.2",
          name: "Best Practices",
          documents: "/downloads/criteria7.2-documents.pdf"
        },
        {
          id: "7.3",
          name: "Institutional Distinctiveness",
          documents: "/downloads/criteria7.3-documents.pdf"
        }
      ]
    }
  ];

  // Additional NAAC Documents
  const additionalDocuments = [
    {
      title: "IQAC",
      name: "IQAC Committee",
      documents: "/downloads/iqac-documents.pdf"
    },
    {
      title: "SSR",
      name: "Self Study Report",
      documents: "/downloads/ssr-documents.pdf"
    },
    {
      title: "DVV Clarification",
      name: "Data Validation and verification",
      documents: "/downloads/dvv-documents.pdf"
    },
    {
      title: "AOD",
      name: "Assessment Outcome Document",
      documents: "/downloads/aod-documents.pdf"
    },
    {
      title: "AQAR",
      name: "NAAC AQAR 2023 – 2024 Report",
      documents: "/downloads/aqar-documents.pdf"
    }
  ];

  return (
    <div className="naac-page bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="page-header">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">NAAC Accreditation</h1>
              <p className="lead text-white opacity-90">
                Sanskriti School of Engineering - Accredited with 'A' Grade by NAAC on February 1, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About NAAC Section */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="badge bg-primary text-white fs-6 px-3 py-2 mb-3">NAAC 'A' Grade Accredited</div>
                  <h2 className="h3 fw-bold mb-3">National Assessment and Accreditation Council</h2>
                </div>
                
                <div className="mb-5">
                  <p className="lead text-center mb-4">
                    At Sanskriti School of Engineering, we take immense pride in being accredited with 'A' Grade by the National Assessment and Accreditation Council (NAAC) on February 1, 2024. This achievement reflects our commitment to providing quality education and fostering an environment that promotes excellence and innovation.
                  </p>
                  
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <p>
                        The NAAC is an autonomous institution established by the University Grants Commission (UGC) of India to assess and accredit higher education institutions. The 'A' Grade accreditation is a validation of our continuous pursuit of academic excellence and commitment to quality education.
                      </p>
                      <p>
                        This accreditation process has provided valuable insights that guide our ongoing efforts to enhance the educational experience we provide to our students.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light p-4 rounded shadow-sm">
                        <h4 className="h5 mb-3">NAAC Assessment Parameters</h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Curricular Aspects
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Teaching-Learning and Evaluation
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Research, Innovations and Extension
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Infrastructure and Learning Resources
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Student Support and Progression
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Governance, Leadership and Management
                          </li>
                          <li className="list-group-item bg-transparent px-0">
                            <i className="fas fa-check-circle text-success me-2"></i> Institutional Values and Best Practices
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* NAAC Value */}
                <div className="mb-5">
                  <h3 className="h4 fw-bold mb-4">Value of NAAC Accreditation</h3>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="d-flex h-100">
                        <div className="me-3 text-primary">
                          <i className="fas fa-medal fa-2x"></i>
                        </div>
                        <div>
                          <h5 className="mb-2">Quality Assurance</h5>
                          <p className="text-muted mb-0">Validation of our commitment to maintaining high educational standards</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex h-100">
                        <div className="me-3 text-primary">
                          <i className="fas fa-chart-line fa-2x"></i>
                        </div>
                        <div>
                          <h5 className="mb-2">Continuous Improvement</h5>
                          <p className="text-muted mb-0">Framework for ongoing enhancement of academic processes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex h-100">
                        <div className="me-3 text-primary">
                          <i className="fas fa-handshake fa-2x"></i>
                        </div>
                        <div>
                          <h5 className="mb-2">Stakeholder Confidence</h5>
                          <p className="text-muted mb-0">Enhanced trust from students, parents, and industry partners</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NAAC Criteria and Documents Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">NAAC Assessment Criteria</h2>
            <p className="lead text-muted">Comprehensive documentation of our accreditation process</p>
          </div>
          
          {/* NAAC Criteria Accordions */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="accordion" id="naacAccordion">
                {naacCriteria.map((criteria) => (
                  <div className="accordion-item mb-3 border shadow-sm rounded overflow-hidden" key={criteria.id}>
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button fw-bold" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#criteria${criteria.id}`} 
                        aria-expanded={criteria.id === 1 ? "true" : "false"} 
                        aria-controls={`criteria${criteria.id}`}
                      >
                        <div className="bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                          <strong>{criteria.id}</strong>
                        </div>
                        <span>{criteria.title}: {criteria.name}</span>
                      </button>
                    </h2>
                    <div 
                      id={`criteria${criteria.id}`} 
                      className={`accordion-collapse collapse ${criteria.id === 1 ? "show" : ""}`} 
                      data-bs-parent="#naacAccordion"
                    >
                      <div className="accordion-body">
                        <div className="list-group">
                          {criteria.subcriteria.map((subcriteria) => (
                            <div key={subcriteria.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 py-3 px-4 mb-2 bg-light rounded">
                              <div>
                                <h5 className="mb-1 fw-bold">Criteria {subcriteria.id}</h5>
                                <p className="mb-0">{subcriteria.name}</p>
                              </div>
                              <a href={subcriteria.documents} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                                Supporting Documents <i className="fas fa-file-pdf ms-2"></i>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional NAAC Documents */}
          <div className="mt-5 pt-4">
            <h3 className="h4 fw-bold text-center mb-4">Additional NAAC Documentation</h3>
            <div className="row g-4 justify-content-center">
              {additionalDocuments.map((doc, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-secondary text-white rounded p-2 d-flex align-items-center justify-content-center me-3" style={{ minWidth: '50px' }}>
                          <strong>{doc.title}</strong>
                        </div>
                      </div>
                      <p className="mb-4">{doc.name}</p>
                      <a href={doc.documents} className="btn btn-outline-secondary d-flex align-items-center justify-content-between" target="_blank" rel="noopener noreferrer">
                        <span>View Documents</span>
                        <i className="fas fa-file-pdf ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-4 text-center">
          <h3 className="fw-bold mb-4">Dedicated to Quality Education</h3>
          <p className="lead mb-4">Our NAAC 'A' Grade accreditation is a testimony to our commitment to educational excellence.</p>
          <a href="/about/iqac" className="btn btn-light">
            Visit IQAC Page <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NAAC;
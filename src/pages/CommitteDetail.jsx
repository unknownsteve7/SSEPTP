import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";

/**
 * Committee Detail page component
 * Displays detailed information about a specific committee
 */
const CommitteeDetail = () => {
  const { id } = useParams();
  const [committee, setCommittee] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Committee data - in a real app, this would come from an API
  const committeesData = {
    "iqac": {
      name: "IQAC",
      fullName: "Internal Quality Assurance Cell",
      description: "The Internal Quality Assurance Cell (IQAC) at Sanskriti School of Engineering plays a pivotal role in maintaining and enhancing the quality of education. It develops a system for conscious, consistent, and catalytic improvement in the academic and administrative performance of the institution.",
      icon: "fas fa-medal",
      color: "#1D9DD9", // Blue
      banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      objectives: [
        "Develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the institution",
        "Promote measures for institutional functioning towards quality enhancement through internalization of quality culture and best practices",
        "Ensure timely, efficient and progressive performance of academic, administrative and financial tasks",
        "Optimize and integrate modern methods of teaching, learning and evaluation",
        "Ensure the adequacy, maintenance and functioning of the support structure"
      ],
      activities: [
        "Conducting periodic academic audits",
        "Facilitating NAAC accreditation and other quality certifications",
        "Collecting and analyzing feedback from stakeholders",
        "Organizing workshops on quality-related themes",
        "Preparing the Annual Quality Assurance Report (AQAR)"
      ],
      achievements: [
        "Successfully coordinated NAAC 'A' grade accreditation",
        "Implemented outcome-based education across all departments",
        "Developed comprehensive feedback system from all stakeholders",
        "Organized 5+ faculty development programs on quality enhancement",
        "Published annual quality reports with measurable improvements"
      ],
      team: [
        { name: "Dr. Rajesh Kumar", designation: "Chairperson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Priya Sharma", designation: "Coordinator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { name: "Prof. Sunil Reddy", designation: "Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
      ],
      contactEmail: "iqac@sseptp.org",
      documents: [
        { name: "IQAC Annual Report 2024-25", link: "/downloads/iqac-annual-report-2024-25.pdf" },
        { name: "Quality Assurance Policy", link: "/downloads/quality-assurance-policy.pdf" },
        { name: "NAAC SSR Document", link: "/downloads/naac-ssr-document.pdf" }
      ]
    },
    "nptel": {
      name: "NPTEL",
      fullName: "National Programme on Technology Enhanced Learning",
      description: "The NPTEL chapter at Sanskriti School of Engineering facilitates web and video courses in engineering, science, and humanities streams to enhance the quality of engineering education. It provides a platform for students and faculty to access world-class educational resources.",
      icon: "fas fa-laptop",
      color: "#F9843D", // Orange
      banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      objectives: [
        "Facilitate e-learning through online web and video courses in engineering, science, and management",
        "Promote self-paced learning and certification for students and faculty",
        "Enhance the quality of engineering education by providing access to lectures from faculty of IITs and IISc",
        "Bridge the gap between industry requirements and academic curriculum",
        "Encourage faculty and students to participate in NPTEL courses and certifications"
      ],
      activities: [
        "Organizing awareness programs about NPTEL courses",
        "Facilitating enrollment of students and faculty in NPTEL courses",
        "Conducting NPTEL certification exams on campus",
        "Recognizing NPTEL course toppers and certificate holders",
        "Integrating NPTEL course credits into the regular curriculum"
      ],
      achievements: [
        "200+ students completed NPTEL certifications in the last academic year",
        "25+ faculty members qualified as NPTEL certified mentors",
        "Recognized as active NPTEL Local Chapter with 4-star rating",
        "5 students achieved national ranks in NPTEL examinations",
        "Successfully integrated 10 NPTEL courses into the regular curriculum"
      ],
      team: [
        { name: "Dr. Anil Kumar", designation: "SPOC (Single Point of Contact)", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Nisha Patel", designation: "Associate SPOC", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { name: "Prof. Ravi Shankar", designation: "Technical Coordinator", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
      ],
      contactEmail: "nptel@sseptp.org",
      documents: [
        { name: "NPTEL Course List", link: "/downloads/nptel-course-list.pdf" },
        { name: "NPTEL Certification Process", link: "/downloads/nptel-certification-process.pdf" },
        { name: "NPTEL Success Stories", link: "/downloads/nptel-success-stories.pdf" }
      ]
    }
  };
  
  // Simulating API fetch - in a real app, this would be an actual API call
  useEffect(() => {
    // Simulating network delay
    const timer = setTimeout(() => {
      if (committeesData[id]) {
        setCommittee(committeesData[id]);
      } else {
        // Fallback for committees not in the detailed data
        // In a real app, you would fetch this from an API
        setCommittee({
          name: id.toUpperCase(),
          fullName: "Committee Details Coming Soon",
          description: "We're currently updating the detailed information about this committee. Please check back soon or contact the committee directly for more information.",
          color: "#6c757d",
          icon: "fas fa-info-circle",
          banner: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
          contactEmail: "info@sseptp.org"
        });
      }
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // While loading, show skeleton
  if (loading) {
    return (
      <div className="committee-detail-page">
        <Navbar />
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading committee information...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="committee-detail-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Committee Banner */}
      <section 
        className="committee-banner position-relative d-flex align-items-center justify-content-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${committee.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh'
        }}
      >
        <div className="container text-white text-center py-5">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
            style={{ 
              width: "100px", 
              height: "100px", 
              backgroundColor: committee.color 
            }}
          >
            <i className={`${committee.icon} fa-3x`}></i>
          </div>
          <h1 className="display-4 fw-bold mb-3">{committee.name}</h1>
          <h2 className="fs-4 mb-4 opacity-75">{committee.fullName}</h2>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="outline-light"
              text="Contact Committee"
              href={`mailto:${committee.contactEmail}`}
              icon="fas fa-envelope"
            />
            <Button
              variant="light"
              text="View Events"
              href={`/events/committee/${id}`}
              icon="fas fa-calendar-alt"
            />
          </div>
        </div>
      </section>
      
      {/* Committee Description */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm p-4 p-md-5">
                <h2 className="h3 fw-bold mb-4 pb-2 border-bottom">About {committee.name}</h2>
                <p className="mb-4 lead">{committee.description}</p>
                
                {committee.objectives && (
                  <div className="mb-4">
                    <h3 className="h5 fw-bold mb-3">Objectives</h3>
                    <ul className="list-group list-group-flush">
                      {committee.objectives.map((objective, index) => (
                        <li className="list-group-item bg-transparent px-0 d-flex" key={index}>
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {committee.activities && (
                  <div className="mb-4">
                    <h3 className="h5 fw-bold mb-3">Key Activities</h3>
                    <div className="row g-3">
                      {committee.activities.map((activity, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="d-flex p-3 bg-light rounded">
                            <i className="fas fa-arrow-right text-primary me-3 mt-1"></i>
                            <span>{activity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {committee.achievements && (
                  <div className="mb-4">
                    <h3 className="h5 fw-bold mb-3">Achievements</h3>
                    <div className="bg-light p-4 rounded">
                      <ul className="mb-0">
                        {committee.achievements.map((achievement, index) => (
                          <li className="mb-2" key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {committee.documents && (
                  <div>
                    <h3 className="h5 fw-bold mb-3">Important Documents</h3>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>Document Name</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {committee.documents.map((doc, index) => (
                            <tr key={index}>
                              <td>{doc.name}</td>
                              <td className="text-center">
                                <a href={doc.link} className="btn btn-sm btn-outline-primary">
                                  <i className="fas fa-download me-2"></i>Download
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Committee Team */}
      {committee.team && (
        <section className="py-5 bg-light">
          <div className="container py-3">
            <div className="text-center mb-5">
              <h2 className="h3 fw-bold">Committee Team</h2>
              <p className="text-muted">Meet the dedicated team behind {committee.name}</p>
            </div>
            
            <div className="row justify-content-center">
              {committee.team.map((member, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="p-4">
                      <div className="rounded-circle overflow-hidden mx-auto mb-4" style={{ width: "150px", height: "150px" }}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="img-fluid w-100 h-100" 
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h3 className="h5 fw-bold mb-1">{member.name}</h3>
                      <p className="text-muted mb-0">{member.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Contact & Related Committees */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h3 className="h5 fw-bold mb-3">Contact Information</h3>
                      <div className="d-flex mb-3">
                        <div className="me-3 text-primary">
                          <i className="fas fa-envelope fa-lg"></i>
                        </div>
                        <div>
                          <h5 className="h6 mb-1">Email</h5>
                          <p className="mb-0">
                            <a href={`mailto:${committee.contactEmail}`} className="text-decoration-none">
                              {committee.contactEmail}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-3 text-primary">
                          <i className="fas fa-map-marker-alt fa-lg"></i>
                        </div>
                        <div>
                          <h5 className="h6 mb-1">Office</h5>
                          <p className="mb-0">Room 105, Admin Block, SSE Campus</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="me-3 text-primary">
                          <i className="fas fa-clock fa-lg"></i>
                        </div>
                        <div>
                          <h5 className="h6 mb-1">Office Hours</h5>
                          <p className="mb-0">Monday - Friday, 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h3 className="h5 fw-bold mb-3">Related Committees</h3>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent px-0">
                          <Link to="/about/committees/iqac" className="text-decoration-none">
                            <div className="d-flex align-items-center">
                              <div 
                                className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                                style={{ 
                                  width: "40px", 
                                  height: "40px", 
                                  backgroundColor: "#1D9DD9",
                                  color: "white"
                                }}
                              >
                                <i className="fas fa-medal"></i>
                              </div>
                              <div>IQAC - Internal Quality Assurance Cell</div>
                            </div>
                          </Link>
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <Link to="/about/committees/academic" className="text-decoration-none">
                            <div className="d-flex align-items-center">
                              <div 
                                className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                                style={{ 
                                  width: "40px", 
                                  height: "40px", 
                                  backgroundColor: "#28A745",
                                  color: "white"
                                }}
                              >
                                <i className="fas fa-clipboard-check"></i>
                              </div>
                              <div>Academic Audit Cell</div>
                            </div>
                          </Link>
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <Link to="/about/committees/industry" className="text-decoration-none">
                            <div className="d-flex align-items-center">
                              <div 
                                className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                                style={{ 
                                  width: "40px", 
                                  height: "40px", 
                                  backgroundColor: "#6C757D",
                                  color: "white"
                                }}
                              >
                                <i className="fas fa-industry"></i>
                              </div>
                              <div>Industry Interaction Cell</div>
                            </div>
                          </Link>
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
      
      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: committee.color, color: "white" }}>
        <div className="container py-3 text-center">
          <h2 className="h3 fw-bold mb-4">Join {committee.name}</h2>
          <p className="mb-4">
            Interested in contributing to {committee.name} at Sanskriti School of Engineering?
            We welcome participation from faculty and students who are passionate about our mission.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="light"
              text="Apply to Join"
              href="/about/committees/join"
              icon="fas fa-user-plus"
            />
            <Button
              variant="outline-light"
              text="Learn More"
              href="/about/committees"
              icon="fas fa-arrow-right"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default CommitteeDetail;
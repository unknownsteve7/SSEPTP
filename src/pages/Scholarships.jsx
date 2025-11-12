import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

// Import relevant images
import girlInLibrary from "../assets/girlInLibrary.jpg";
import girlsStudying from "../assets/girlsStudying.jpg";
import library from "../assets/library.jpg";
import principal from "../assets/principal.jpg";
import girlWritingExam from "../assets/girlWritingExam.jpg";

/**
 * Scholarship page component
 * Displays information about scholarships offered at SSE
 */
const Scholarship = () => {
  // Scholarship stats
  const scholarshipStats = [
    { value: "2010", label: "Year of Establishment" },
    { value: "13+", label: "Years of Legacy" },
    { value: "2800+", label: "Annual Participation" },
    { value: "300+", label: "Total Beneficiaries" }
  ];

  // Eligibility criteria for the scholarship
  const eligibilityCriteria = [
    "Academic merit with consistent performance",
    "Family annual income below the specified threshold",
    "Regular attendance and good conduct",
    "Participation in extracurricular activities"
  ];

  // Custom inline styles
  const styles = {
    cardHover: {
      transition: "all 0.3s ease",
    },
    focusInput: {
      borderColor: "#F9843D",
      boxShadow: "0 0 0 0.25rem rgba(249, 132, 61, 0.25)"
    },
    scholarshipCard: {
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      transition: "all 0.3s ease"
    }
  };

  return (
    <div className="scholarship-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>Sai Prudent Scholarship</h1>
              <p>
                Empowering deserving students to achieve academic excellence through financial assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Overview Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h5 className="text-primary text-uppercase fw-semibold mb-2">Nurturing Education For All</h5>
                <h2 className="fw-bold mb-4">About Sai Prudent Scholarship</h2>
                <p className="mb-4">
                  The Sai Prudent Scholarship (SPS) program was established in 2010 by the Sanskrithi Educational Society, with the purpose of empowering students from economically disadvantaged backgrounds to achieve their educational dreams without financial barriers.
                </p>
                <p className="mb-4">
                  This initiative is supported by the Anahata Stiftung and RISE, Austria, organizations committed to providing resources and opportunities for students who show promise and ambition but face financial constraints. By offering financial assistance, the SPS program aims to ensure that deserving students can continue their education without interruption, building a brighter future for themselves and their communities.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Button
                    variant="primary"
                    text="Apply Now"
                    href="/admissions/enquiry"
                    icon="fas fa-arrow-right"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow">
                <img 
                  src={girlWritingExam} 
                  alt="Students receiving scholarship" 
                  className="img-fluid w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Scholarship Stats */}
          <div className="row mt-5 gy-4">
            {scholarshipStats.map((stat, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div 
                  className="card border-0 shadow-sm h-100 text-center" 
                  style={styles.cardHover}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div className="card-body p-4">
                    <h3 className="display-5 fw-bold text-primary mb-2">{stat.value}</h3>
                    <p className="mb-0 text-secondary">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeader
            subtitle="Scholarship Details"
            title="Eligibility Criteria"
            description="Learn about who can apply for the Sai Prudent Scholarship"
            centered={true}
          />
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow h-100">
                <div className="card-header bg-primary text-white py-3">
                  <h3 className="h4 mb-0">Eligibility Requirements</h3>
                </div>
                <div className="card-body p-4">
                  <div className="row">
                    {eligibilityCriteria.map((criteria, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="d-flex align-items-center p-3 mb-3 bg-light rounded">
                          <i className="fas fa-check-circle text-success me-3"></i>
                          <span>{criteria}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="alert alert-info mt-4 mb-0">
                    <div className="d-flex">
                      <i className="fas fa-info-circle me-3 mt-1"></i>
                      <p className="mb-0">
                        Students must fulfill all the eligibility criteria to be considered for the scholarship. Selection is based on merit and financial need assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeader
            subtitle="How to Apply"
            title="Application Process"
            description="Follow these steps to apply for the Sai Prudent Scholarship"
            centered={true}
          />
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="border rounded p-4 h-100" style={styles.cardHover}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
                        }}>
                        <h4 className="h5 mb-3 d-flex align-items-center">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center p-2 me-3" style={{width: "40px", height: "40px"}}>
                            <span>1</span>
                          </div>
                          Online Application
                        </h4>
                        <p className="mb-0">Fill out the online application form with your personal, academic, and financial details through the student portal.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border rounded p-4 h-100" style={styles.cardHover}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
                        }}>
                        <h4 className="h5 mb-3 d-flex align-items-center">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center p-2 me-3" style={{width: "40px", height: "40px"}}>
                            <span>2</span>
                          </div>
                          Document Submission
                        </h4>
                        <p className="mb-0">Upload all required documents including academic records, income certificates, and supporting financial documents.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border rounded p-4 h-100" style={styles.cardHover}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
                        }}>
                        <h4 className="h5 mb-3 d-flex align-items-center">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center p-2 me-3" style={{width: "40px", height: "40px"}}>
                            <span>3</span>
                          </div>
                          Verification Process
                        </h4>
                        <p className="mb-0">Applications undergo a thorough verification process by the scholarship committee to assess eligibility and need.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border rounded p-4 h-100" style={styles.cardHover}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
                        }}>
                        <h4 className="h5 mb-3 d-flex align-items-center">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center p-2 me-3" style={{width: "40px", height: "40px"}}>
                            <span>4</span>
                          </div>
                          Selection & Award
                        </h4>
                        <p className="mb-0">Selected students are notified and the scholarship amount is credited directly to their tuition fees account.</p>
                      </div>
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

export default Scholarship;
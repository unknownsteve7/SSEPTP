import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

// Import images from assets
import ssecampus from "../assets/ssecampus.jpg";
import classroomStylish3 from "../assets/classroomStylish3.jpg";
import girlInLibrary from "../assets/girlInLibrary.jpg";
import lab1 from "../assets/lab1.jpg";
import library from "../assets/library.jpg";
import mechanical from "../assets/mechanical.jpg";
import computerLabFocused from "../assets/computerLabFocused.jpg";
import girlsStudying from "../assets/girlsStudying.jpg";
import principal from "../assets/principal.jpg";

const AdmissionsOverview = () => {
  // Important dates for admissions - condensed to essential information
  const importantDates = [
    { id: 1, event: "Online Application Start", date: "January 15, 2025" },
    { id: 2, event: "Application Deadline", date: "April 30, 2025" },
    { id: 3, event: "Entrance Examination", date: "May 20, 2025" },
    { id: 4, event: "Result Declaration", date: "June 10, 2025" },
    { id: 5, event: "Counselling Rounds", date: "June 20 - July 10, 2025" },
    { id: 6, event: "Classes Commence", date: "August 1, 2025" }
  ];

  // Admission helpline numbers - condensed
  const helplineNumbers = [
    { id: 1, department: "Main Admission Office", number: "+91  9100064545" },
    { id: 2, department: "B.Tech Admissions", number: "+91  9100074535" },
    { id: 3, department: "Scholarship Enquiries", number: "+91 9100074535" }
  ];

  // Application process steps - simplified
  const processSteps = [
    {
      step: 1,
      title: "Online Application",
      icon: "fas fa-laptop",
      description: "Fill out the online application form and upload required documents."
    },
    {
      step: 2,
      title: "Entrance Examination",
      icon: "fas fa-edit",
      description: "Appear for JEE Main, State CETs or university entrance test."
    },
    {
      step: 3,
      title: "Merit & Counselling",
      icon: "fas fa-list-ol",
      description: "Check merit list and participate in counselling for program allocation."
    },
    {
      step: 4,
      title: "Admission Confirmation",
      icon: "fas fa-check-circle",
      description: "Pay fees, verify documents and complete admission formalities."
    }
  ];

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Updated to match other pages */}
      <section className="page-header">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">Admissions Overview</h1>
              <p className="lead text-white opacity-90 mb-4">
                Your journey to becoming a future-ready engineer begins here.
                Learn about our admission process, eligibility criteria, and
                important dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h5 className="text-primary">Welcome to SSE</h5>
              <h2 className="fw-bold mb-4">Begin Your Engineering Journey</h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, we offer a transparent, merit-based 
                admission process designed to select candidates with academic excellence, 
                innovative thinking, and passion for engineering.
              </p>
              
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <i className="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <h5 className="mb-1">Excellence in Education</h5>
                  <p className="text-muted">NAAC accredited curriculum with industry relevance</p>
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <i className="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <h5 className="mb-1">Modern Infrastructure</h5>
                  <p className="text-muted">State-of-the-art facilities and advanced laboratories</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="me-3 text-primary">
                  <i className="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <h5 className="mb-1">Placement Opportunities</h5>
                  <p className="text-muted">Strong industry connections for better career prospects</p>
                </div>
              </div>

              <Button
                variant="primary"
                text="Apply Now"
                icon="fas fa-arrow-right"
                href="/admissions/enquiry"
              />
            </div>
            <div className="col-lg-6">
              <img
                src={ssecampus}
                alt="SSE Campus"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">How to Apply</h6>
            <h2 className="fw-bold mb-3">Admission Process</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Follow these simple steps to apply for our programmes
            </p>
          </div>

          <div className="row g-4">
            {processSteps.map((step) => (
              <div className="col-md-6 col-lg-3" key={step.step}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                      style={{ width: "60px", height: "60px" }}>
                      <i className={`${step.icon} fa-lg`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">{step.title}</h3>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    <span className="badge bg-primary rounded-pill px-3 py-2">Step {step.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">Who Can Apply</h6>
            <h2 className="fw-bold mb-3">Eligibility Criteria</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Basic requirements for admission to our programmes
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-primary text-white py-3">
                  <h3 className="h5 mb-0 fw-bold">B.Tech Programmes</h3>
                </div>
                <div className="card-body p-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>10+2 or equivalent with Physics, Chemistry, and Mathematics</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Minimum 50% aggregate in PCM (45% for reserved categories)</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Valid score in JEE Main or state-level engineering entrance exams</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Age: Not more than 23 years as on July 31, 2025</span>
                    </li>
                  </ul>
                  <div className="d-grid mt-4">
                    <Button
                      variant="outline-primary"
                      text="View B.Tech Programmes"
                      href="/programmes/undergraduate"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-primary text-white py-3">
                  <h3 className="h5 mb-0 fw-bold">Lateral Entry to B.Tech (2nd Year)</h3>
                </div>
                <div className="card-body p-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Diploma in Engineering (3 years after 10th) with minimum 60% marks</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>B.Sc. with Mathematics as one of the subjects with minimum 60% marks</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Valid score in LEET or equivalent state test</span>
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex">
                      <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                      <span>Diploma/Degree must be from a recognized institution</span>
                    </li>
                  </ul>
                  <div className="d-grid mt-4">
                    <Button
                      variant="outline-primary"
                      text="Lateral Entry Details"
                      href="/programmes/undergraduate"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info mt-4 d-flex align-items-start">
            <div className="text-info me-3 mt-1">
              <i className="fas fa-info-circle fa-lg"></i>
            </div>
            <div>
              <p className="mb-1 fw-bold">Important Note on Eligibility</p>
              <p className="mb-0">
                Meeting minimum eligibility does not guarantee admission. The final selection is based on 
                merit list prepared from entrance exam performance and seat availability. The college follows 
                government reservation policy for SC, ST, OBC, EWS, and PwD candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">Mark Your Calendar</h6>
            <h2 className="fw-bold mb-3">Important Dates (2025-26)</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Key dates to remember for the admission process
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="py-3 ps-4">Event</th>
                          <th className="py-3 text-end pe-4">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {importantDates.map((item) => (
                          <tr key={item.id}>
                            <td className="py-3 ps-4">{item.event}</td>
                            <td className="py-3 text-end pe-4">{item.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer py-3 text-center bg-transparent">
                  <small className="text-muted">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Dates are tentative and subject to change. Check website for updates.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">Investment in Education</h6>
            <h2 className="fw-bold mb-3">Fee Structure</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Overview of fees for different programmes
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped mb-0">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="py-3 ps-4">Programme</th>
                          <th className="py-3 text-end">Tuition Fee (per annum)</th>
                          <th className="py-3 text-end pe-4">Total Fee (First Year)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 ps-4">B.Tech - CSE/IT</td>
                          <td className="py-3 text-end">₹1,20,000</td>
                          <td className="py-3 text-end pe-4">₹1,70,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">B.Tech - ECE/EEE</td>
                          <td className="py-3 text-end">₹1,15,000</td>
                          <td className="py-3 text-end pe-4">₹1,65,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">B.Tech - ME/CE</td>
                          <td className="py-3 text-end">₹1,10,000</td>
                          <td className="py-3 text-end pe-4">₹1,60,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">Lateral Entry (All Branches)</td>
                          <td className="py-3 text-end">Same as respective branch</td>
                          <td className="py-3 text-end pe-4">Branch fee + ₹50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer bg-transparent p-4 border-0">
                  <div className="alert alert-secondary mb-0">
                    <ul className="mb-0">
                      <li className="mb-2">Total fee includes tuition fee, development fee, admission fee, and refundable caution deposit</li>
                      <li className="mb-2">Hostel and mess charges are additional</li>
                      <li className="mb-0">Various scholarships available for meritorious students and those from economically weaker sections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">Financial Support</h6>
            <h2 className="fw-bold mb-3">Scholarships & Financial Aid</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We believe financial constraints should not hinder educational aspirations
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                    style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-medal fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Merit Scholarships</h3>
                  <p className="text-muted mb-3">Based on performance in 12th standard or entrance exam rank</p>
                  <ul className="list-unstyled text-start mb-0">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Top 1%: 100% tuition fee waiver</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Top 5%: 50% tuition fee waiver</li>
                    <li><i className="fas fa-check text-primary me-2"></i>Top 10%: 25% tuition fee waiver</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                    style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-hand-holding-heart fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Need-Based Financial Aid</h3>
                  <p className="text-muted mb-3">For economically disadvantaged students</p>
                  <ul className="list-unstyled text-start mb-0">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Income-based fee concessions</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Support for single-parent families</li>
                    <li><i className="fas fa-check text-primary me-2"></i>Interest-free education loans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                    style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-star fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Special Category</h3>
                  <p className="text-muted mb-3">For various special categories</p>
                  <ul className="list-unstyled text-start mb-0">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Sports excellence scholarships</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Girl child empowerment</li>
                    <li><i className="fas fa-check text-primary me-2"></i>Defense personnel children</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              text="Scholarship Details"
              href="/academics/scholarship"
            />
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">Get in Touch</h6>
            <h2 className="fw-bold mb-3">Contact Admission Helpline</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Our admission team is ready to assist you
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-md-8 p-4 p-md-5 border-end">
                      <h4 className="fw-bold mb-4">Admission Office</h4>
                      <div className="d-flex mb-3">
                        <div className="text-primary me-3">
                          <i className="fas fa-map-marker-alt fa-lg"></i>
                        </div>
                        <p className="mb-0">Beedupalli Knowledgepark,
Behind SSSIHMS, Puttaparthi,
Sri Sathya Sai District, AP - 515134</p>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="text-primary me-3">
                          <i className="fas fa-envelope fa-lg"></i>
                        </div>
                        <p className="mb-0">enquiry@sseptp.org</p>
                      </div>
                      <div className="d-flex mb-4">
                        <div className="text-primary me-3">
                          <i className="fas fa-clock fa-lg"></i>
                        </div>
                        <p className="mb-0">Monday to Saturday: 9:00 AM to 5:00 PM</p>
                      </div>
                      
                      <h5 className="fw-bold mb-3">Helpline Numbers</h5>
                      <ul className="list-unstyled mb-0">
                        {helplineNumbers.map((item) => (
                          <li key={item.id} className="mb-2">
                            <div className="d-flex">
                              <div className="text-primary me-3">
                                <i className="fas fa-phone-alt"></i>
                              </div>
                              <div>
                                <span className="fw-medium">{item.department}: </span>
                                <span className="text-primary">{item.number}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <img 
                        src={principal}
                        alt="Admission Office" 
                        className="img-fluid mt-5" 
                        style={{ backgroundPosition: "center" }}
                      />
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
    </>
  );
};

export default AdmissionsOverview;
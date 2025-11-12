import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import redressalcomittee from "../assets/files/redressalcomittee.pdf"; // Path to the grievance redressal PDF
import nss from "../assets/files/nss.pdf"; // Path to the NSS PDF
import antiraggingPdf from "../assets/files/antiragging.pdf"; // Path to the Anti-Ragging PDF
import rti from "../assets/files/RTI.pdf";
import antiSexualHarassment from "../assets/files/antiSexualHaressement.pdf";
import undertaking from "../assets/files/UNDERTAKING.pdf"; // Path to the undertaking PDF
import icc from "../assets/files/icc.pdf"; // Path to the ICC PDF
import sedgs from "../assets/files/sedgs.pdf"; // Path to the SEDGS PDF
import Acceccebility from "../assets/files/Acceccebility.pdf"; // Path to the Acceccebility PDF
import SSEInstituational from "../assets/files/SSEInstitutionalDevelopmentPlan.pdf"; // Path to the SSEInstituational PDF
import UGCFeeRefundPolicy from "../assets/files/UGCFeeRefundPolicy.pdf"; // Path to the UGCFeeRefundPolicy PDF
import RDC from "../assets/files/RDC.pdf"; // Path to the RDC PDF

/**
 * Committees page component
 * Displays all committees and cells at SSE in an organized manner
 */
const Committees = () => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ REMOVED: The large, unused 'committees' array and 'activeCategory' state have been removed for cleanup.

  // Student Support Services data
  const supportServices = [
    {
      id: "grievance-redressal",
      title: "Student Grievance Redressal",
      description:
        "Access the official student grievance redressal procedures and guidelines to understand how to file and track your complaints effectively.",
      icon: "fas fa-comments fa-lg",
      bgColor: "bg-primary",
      keywords: [
        "grievance",
        "complaint",
        "redressal",
        "procedures",
        "guidelines",
      ],
    },
    {
      id: "anti-harassment",
      title: "Anti-Sexual Harassment",
      description:
        "Learn about our policies and procedures to prevent and address sexual harassment on campus. Report incidents confidentially through our dedicated committee.",
      icon: "fas fa-user-shield fa-lg",
      bgColor: "bg-danger",
      keywords: [
        "sexual",
        "harassment",
        "policy",
        "safety",
        "report",
        "committee",
      ],
    },
    {
      id: "rti-service",
      title: "RTI (Right to Information)",
      description:
        "Exercise your right to access information under the RTI Act. Download the RTI application form and learn about the process to obtain institutional information.",
      icon: "fas fa-info-circle fa-lg",
      bgColor: "bg-info",
      keywords: [
        "rti",
        "right",
        "information",
        "access",
        "application",
        "form",
      ],
    },
    {
      id: "ncc-nss",
      title: "NCC & NSS Programs",
      description:
        "Join National Cadet Corps (NCC) and National Service Scheme (NSS) programs to develop leadership skills and serve the community while building character.",
      icon: "fas fa-hands-helping fa-lg",
      bgColor: "bg-success",
      keywords: [
        "ncc",
        "nss",
        "national",
        "cadet",
        "service",
        "leadership",
        "community",
      ],
    },
    {
      id: "anti-ragging-service",
      title: "Anti-Ragging Committee",
      description:
        "Learn about our zero-tolerance approach towards ragging and harassment on campus. Access anti-ragging policies and complaint procedures.",
      icon: "fas fa-shield-alt fa-lg",
      bgColor: "bg-warning",
      keywords: [
        "ragging",
        "harassment",
        "zero-tolerance",
        "policy",
        "complaint",
      ],
    },
    {
      id: "helpline",
      title: "Student Welfare Helpline",
      description:
        "24/7 helpline for student support and emergency assistance. Contact us for any urgent matters or if you need immediate help with academic or personal issues.",
      icon: "fas fa-phone-alt fa-lg",
      bgColor: "bg-secondary",
      keywords: [
        "helpline",
        "support",
        "emergency",
        "24/7",
        "assistance",
        "contact",
      ],
    },
    {
      id: "undertaking-service",
      title: "Student Undertaking",
      description:
        "Complete and submit your official student undertaking forms. Download required documents and understand your commitments as a student of our institution.",
      icon: "fas fa-file-signature fa-lg",
      bgColor: "bg-info",
      keywords: [
        "undertaking",
        "forms",
        "documents",
        "commitments",
        "student",
        "official",
      ],
    },
    // ✅ FIXED: Added the ICC data here. Now the search filter can find it.
    {
      id: "icc",
      title: "Internal Complaints Committee",
      description:
        "The Internal Complaints Committee (ICC) is responsible for addressing complaints related to sexual harassment and ensuring a safe environment for all.",
      keywords: [
        "icc",
        "internal",
        "complaints",
        "committee",
        "sexual",
        "harassment",
      ],
    },
    {
      id: "sedgs",
      title: "Socio-Economically Disadvantaged Group",
      description:
        "The SEDG'S Committee focuses on Sustainable Development Goals and promotes initiatives for environmental sustainability and social equity.",
      keywords: [
        "sedgs",
        "sustainable",
        "development",
        "goals",
        "environment",
        "sustainability",
        "social",
        "equity",
      ],
    },
    {
      id: "accessibility",
      title: "Campus Accessibility",
      description:
        "Comprehensive accessibility measures and barrier-free infrastructure for persons with disabilities, including ramps, wheelchairs, and specially designed facilities.",
      icon: "fas fa-wheelchair fa-lg",
      bgColor: "bg-info",
      keywords: [
        "accessibility",
        "wheelchair",
        "barrier-free",
        "disabled",
        "ramps",
        "inclusive",
        "facilities",
      ],
    },
    {
      id: "institutional-development",
      title: "Institutional Development Plan",
      description:
        "Strategic development plan (2025-2030) outlining the institution's vision, mission, governance, academic excellence, and future growth initiatives.",
      icon: "fas fa-chart-line fa-lg",
      bgColor: "bg-success",
      keywords: [
        "development",
        "strategic",
        "plan",
        "institutional",
        "growth",
        "vision",
        "mission",
        "excellence",
      ],
    },
    {
      id: "fee-refund-policy",
      title: "UGC Fee Refund Policy",
      description:
        "Official UGC fee refund policy guidelines for students regarding admission cancellation, withdrawal procedures, and refund processing timelines.",
      icon: "fas fa-money-check-alt fa-lg",
      bgColor: "bg-warning",
      keywords: [
        "fee",
        "refund",
        "policy",
        "ugc",
        "admission",
        "cancellation",
        "withdrawal",
        "guidelines",
      ],
    },
    {
      id: "research-development",
      title: "Research & Development Cell",
      description:
        "Research and Development Committee promoting quality research, innovation, industry collaboration, funding facilitation, and ethical practices.",
      icon: "fas fa-flask fa-lg",
      bgColor: "bg-primary",
      keywords: [
        "research",
        "development",
        "innovation",
        "rdc",
        "collaboration",
        "funding",
        "ethics",
        "projects",
      ],
    },
  ];

  // ✅ REMOVED: The 'filteredCommittees' logic is no longer needed.

  // Filter support services based on search term
  const filteredSupportServices = supportServices.filter((service) => {
    return (
      searchTerm === "" ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="committees-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">UGC</h1>
              <p className="lead text-white opacity-90">
                Discover the various committees and cells that contribute to
                making SSE a center of excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support & Service Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeader
            subtitle="Important Resources"
            title="Student Support & Service"
            description="Access important resources for grievances, complaints, and national service programs"
            centered={true}
          />

          {/* Search Bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-6 col-md-8">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control form-control-lg ps-5 pe-4 border-2"
                  placeholder="Search committees and services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: "50px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    border: "2px solid #e9ecef",
                  }}
                />
                <div
                  className="position-absolute top-50 start-0 translate-middle-y ms-4"
                  style={{ color: "#6c757d" }}
                >
                  <i className="fas fa-search"></i>
                </div>
                {searchTerm && (
                  <button
                    className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-3"
                    onClick={clearSearch}
                    style={{
                      border: "none",
                      background: "none",
                      color: "#6c757d",
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Support Services Grid - Only show if matches search */}
          {(searchTerm === "" || filteredSupportServices.length > 0) && (
            <div className="row g-4">
              {/* Student Grievance Redressal */}
              {(searchTerm === "" ||
                filteredSupportServices.find(
                  (s) => s.id === "grievance-redressal"
                )) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-comments fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        Student Grievance Redressal
                      </h3>
                      <p className="text-muted mb-4 small">
                        Access the official student grievance redressal
                        procedures and guidelines to understand how to file and
                        track your complaints effectively.
                      </p>
                      <Button
                        variant="primary"
                        text="Download Guidelines"
                        href={redressalcomittee}
                        icon="fas fa-download"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Anti-Sexual Harassment */}
              {(searchTerm === "" ||
                filteredSupportServices.find(
                  (s) => s.id === "anti-harassment"
                )) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-danger text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-user-shield fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        Anti-Sexual Harassment
                      </h3>
                      <p className="text-muted mb-4 small">
                        Learn about our policies and procedures to prevent and
                        address sexual harassment on campus. Report incidents
                        confidentially through our dedicated committee.
                      </p>
                      <Button
                        variant="primary"
                        text="View Policy"
                        href={antiSexualHarassment}
                        icon="fas fa-file-alt"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* RTI (Right to Information) */}
              {(searchTerm === "" ||
                filteredSupportServices.find(
                  (s) => s.id === "rti-service"
                )) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-info text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-info-circle fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        RTI (Right to Information)
                      </h3>
                      <p className="text-muted mb-4 small">
                        Exercise your right to access information under the RTI
                        Act. Download the RTI application form and learn about
                        the process to obtain institutional information.
                      </p>
                      <Button
                        variant="primary"
                        text="RTI Information"
                        href={rti}
                        icon="fas fa-search"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NCC/NSS */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "ncc-nss")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-success text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-hands-helping fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">NCC & NSS Programs</h3>
                      <p className="text-muted mb-4 small">
                        Join National Cadet Corps (NCC) and National Service
                        Scheme (NSS) programs to develop leadership skills and
                        serve the community while building character.
                      </p>
                      <Button
                        variant="primary"
                        text="NCC/NSS Info"
                        href={nss}
                        icon="fas fa-flag"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Anti-Ragging */}
              {(searchTerm === "" ||
                filteredSupportServices.find(
                  (s) => s.id === "anti-ragging-service"
                )) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-warning text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-shield-alt fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        Anti-Ragging Committee
                      </h3>
                      <p className="text-muted mb-4 small">
                        Learn about our zero-tolerance approach towards ragging
                        and harassment on campus. Access anti-ragging policies
                        and complaint procedures.
                      </p>
                      <Button
                        variant="primary"
                        text="Anti-Ragging Policy"
                        href={antiraggingPdf}
                        icon="fas fa-shield-alt"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Student Welfare Helpline */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "helpline")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-secondary text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-phone-alt fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        Student Welfare Helpline
                      </h3>
                      <p className="text-muted mb-4 small">
                        24/7 helpline for student support and emergency
                        assistance. Contact us for any urgent matters or if you
                        need immediate help with academic or personal issues.
                      </p>
                      <Button
                        variant="primary"
                        text="Contact Support"
                        href="tel:+918555000000"
                        icon="fas fa-phone"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Undertaking */}
              {(searchTerm === "" ||
                filteredSupportServices.find(
                  (s) => s.id === "undertaking-service"
                )) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-info text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-file-signature fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Undertaking</h3>
                      <p className="text-muted mb-4 small">
                        Complete and submit your official student undertaking
                        forms. Download required documents and understand your
                        commitments as a student of our institution.
                      </p>
                      <Button
                        variant="primary"
                        text="Download Forms"
                        href={undertaking}
                        icon="fas fa-download"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/*ICC */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "icc")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-balance-scale fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">
                        Internal Complaints Committee
                      </h3>
                      <p className="text-muted mb-4 small">
                        The Internal Complaints Committee (ICC) is responsible
                        for addressing complaints related to sexual harassment
                        and ensuring a safe environment for all.
                      </p>
                      <Button
                        variant="primary"
                        text="ICC Guidelines"
                        href={icc}
                        icon="fas fa-info-circle"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SEDG'S Committee */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "sedgs")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-success text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-leaf fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Socio-Economically Disadvantaged Group</h3>
                      <p className="text-muted mb-4 small">
                        The SEDG'S Committee focuses on Sustainable Development
                        Goals and promotes initiatives for environmental
                        sustainability and social equity.
                      </p>
                      <Button
                        variant="primary"
                        text="SEDG'S Info"
                        href={sedgs}
                        icon="fas fa-globe"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Campus Accessibility */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "accessibility")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-info text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-wheelchair fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Campus Accessibility</h3>
                      <p className="text-muted mb-4 small">
                        Comprehensive accessibility measures and barrier-free
                        infrastructure for persons with disabilities, including
                        ramps, wheelchairs, and specially designed facilities.
                      </p>
                      <Button
                        variant="primary"
                        text="Accessibility Info"
                        href={Acceccebility}
                        icon="fas fa-universal-access"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Institutional Development Plan */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "institutional-development")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-success text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-chart-line fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Institutional Development Plan</h3>
                      <p className="text-muted mb-4 small">
                        Strategic development plan (2025-2030) outlining the
                        institution's vision, mission, governance, academic
                        excellence, and future growth initiatives.
                      </p>
                      <Button
                        variant="primary"
                        text="Development Plan"
                        href={SSEInstituational}
                        icon="fas fa-road"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UGC Fee Refund Policy */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "fee-refund-policy")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-warning text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-money-check-alt fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">UGC Fee Refund Policy</h3>
                      <p className="text-muted mb-4 small">
                        Official UGC fee refund policy guidelines for students
                        regarding admission cancellation, withdrawal procedures,
                        and refund processing timelines.
                      </p>
                      <Button
                        variant="primary"
                        text="Refund Policy"
                        href={UGCFeeRefundPolicy}
                        icon="fas fa-file-invoice-dollar"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Research & Development Cell */}
              {(searchTerm === "" ||
                filteredSupportServices.find((s) => s.id === "research-development")) && (
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-translate-y">
                    <div className="card-body p-4 text-center">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="fas fa-flask fa-lg"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Research & Development Cell</h3>
                      <p className="text-muted mb-4 small">
                        Research and Development Committee promoting quality
                        research, innovation, industry collaboration, funding
                        facilitation, and ethical practices.
                      </p>
                      <Button
                        variant="primary"
                        text="RDC Info"
                        href={RDC}
                        icon="fas fa-microscope"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* No Results Message */}
          {searchTerm && filteredSupportServices.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4 className="text-muted">No results found</h4>
              <p className="text-muted">
                Try adjusting your search terms or browse all committees and
                services.
              </p>
              <button className="btn btn-primary" onClick={clearSearch}>
                Clear Search
              </button>
            </div>
          )}

          {/* Emergency Contact Information */}
          {!searchTerm && (
            <div className="row mt-5">
              <div className="col-12">
                <div className="alert alert-info d-flex align-items-center">
                  <i className="fas fa-info-circle fa-2x me-3"></i>
                  <div>
                    <h5 className="alert-heading mb-2">
                      Emergency Contact Information
                    </h5>
                    <p className="mb-0">
                      <strong>Campus Security:</strong> +91 8555 000 001 |
                      <strong> Student Helpline:</strong> +91 8555 000 002 |
                      <strong> Medical Emergency:</strong> +91 8555 000 003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom CSS */}
      <style jsx>{`
        .hover-translate-y {
          transition: all 0.3s ease;
        }

        .hover-translate-y:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }

        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Committees;

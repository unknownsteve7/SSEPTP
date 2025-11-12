import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  
  const handleApplyClick = (e) => {
    e.preventDefault();
    navigate("/admissions/enquiry");
  };
  
  const handleBrochureClick = (e) => {
    e.preventDefault();
    // For downloading files, we'll keep the regular link
    window.open("/downloads/btech-brochure.pdf", "_blank");
  };

  return (
    <section className="py-5 bg-gradient-primary text-white position-relative">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-4">
              Begin Your Engineering Journey with SSE
            </h2>
            <p className="lead opacity-75 mb-5">
              Applications for the 2025-26 academic year are now open. Secure
              your spot in one of our premier B.Tech programmes.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                className="btn btn-light text-primary fw-medium px-4 py-2 rounded-pill"
                onClick={handleApplyClick}
              >
                Apply Now
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import React, { useState, useCallback } from "react";

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Info
    studentName: "",
    gender: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    dateOfBirth: "",
    category: "",
    aadharNumber: "",
    fatherNative: "",
    motherNative: "",

    // Course Details
    ugpg: "UG",
    branch: "",
    quota: "",
    counsellingPhase: "",
    apeapcetHallTicket: "",
    apeapcetRank: "",
    lastStudiedInstitution: "",

    // Address
    doorNo: "",
    streetName: "",
    area: "",
    landmark: "",
    pincode: "",
    studentMobile: "",
    parentsMobile: "",
    email: "",

    // Scholarship
    eligibleForScholarship: "No",
    scholarshipCaste: "",
    scholarshipCategory: "",
    accommodationType: "",

    // Academic
    sscYear: "",
    sscBoard: "",
    sscMarks: "",
    sscPercentag: "",
    sscDivision: "",
    interYear: "",
    interBoard: "",
    interMarks: "",
    interPercentage: "",
    interDivision: "",
    diplomaYear: "",
    diplomaBoard: "",
    diplomaMarks: "",
    diplomaPercentage: "",
    diplomaDivision: "",
    collegeFee: "",
    hostelBusFee: "",
    otherFee: "",
    feeConsession: ""
  });

  const branches = [
    "Computer Science Engineering",
    "Electronics and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
  const quotas = ["Convener Quota", "Management Quota", "Spot Quota"];
  const categories = ["General", "OBC", "SC", "ST", "EWS"];

  // Fixed handleChange with useCallback to prevent re-renders
  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const validate = (step) => {
    switch (step) {
      case 1:
        return (
          formData.studentName &&
          formData.gender &&
          formData.fatherName &&
          formData.motherName &&
          formData.dateOfBirth
        );
      case 2:
        return formData.branch && formData.quota;
      case 3:
        return (
          formData.doorNo &&
          formData.area &&
          formData.pincode &&
          formData.studentMobile &&
          formData.parentsMobile &&
          formData.email
        );
      case 4:
        return formData.sscYear && formData.sscBoard && formData.sscPercentag;
      case 5:
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validate(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Please fill required fields");
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log("Submitting form data:", formData);

    try {
      // Prepare the data as JSON (matching the user's required format)
      const submitData = { ...formData };
      // Optionally, add applicationId if needed:
      // submitData.applicationId = `SSE${Date.now()}`;

      const response = await fetch("https://student-email-sender-api.onrender.com/api/student/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setShowModal(false);
      }
    } catch (error) {
      alert("Submission failed");
    }
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="container py-5">
        <div className="alert alert-success text-center p-4">
          <h3>Application Submitted Successfully!</h3>
          <p>You will receive confirmation shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2>SSE Admission Application</h2>
        <div className="progress mb-3">
          <div
            className="progress-bar"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          ></div>
        </div>
        <p>Step {currentStep} of 5</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="card">
              <div className="card-header">
                <h4>Personal Information</h4>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label">
                        Student Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.studentName}
                        onChange={(e) =>
                          handleChange("studentName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Father's Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.fatherName}
                        onChange={(e) =>
                          handleChange("fatherName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Occupation</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.fatherOccupation}
                        onChange={(e) =>
                          handleChange("fatherOccupation", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Mother's Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.motherName}
                        onChange={(e) =>
                          handleChange("motherName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleChange("dateOfBirth", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select"
                        value={formData.category}
                        onChange={(e) =>
                          handleChange("category", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Aadhar Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.aadharNumber}
                        onChange={(e) =>
                          handleChange("aadharNumber", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Father's Native</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.fatherNative}
                        onChange={(e) =>
                          handleChange("fatherNative", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Mother's Native</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.motherNative}
                        onChange={(e) =>
                          handleChange("motherNative", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Course Details */}
          {currentStep === 2 && (
            <div className="card">
              <div className="card-header">
                <h4>Course Details</h4>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        UG/PG <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.ugpg}
                        onChange={(e) => handleChange("ugpg", e.target.value)}
                      >
                        <option value="UG">UG</option>
                        <option value="PG">PG</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Branch <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.branch}
                        onChange={(e) => handleChange("branch", e.target.value)}
                      >
                        <option value="">Select</option>
                        {branches.map((branch) => (
                          <option key={branch} value={branch}>
                            {branch}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Quota <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.quota}
                        onChange={(e) => handleChange("quota", e.target.value)}
                      >
                        <option value="">Select</option>
                        {quotas.map((quota) => (
                          <option key={quota} value={quota}>
                            {quota}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Counselling Phase</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.counsellingPhase}
                        onChange={(e) =>
                          handleChange("counsellingPhase", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">APEAPCET Hall Ticket</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.apeapcetHallTicket}
                        onChange={(e) =>
                          handleChange("apeapcetHallTicket", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">APEAPCET Rank</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.apeapcetRank}
                        onChange={(e) =>
                          handleChange("apeapcetRank", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Institution</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.lastStudiedInstitution}
                        onChange={(e) =>
                          handleChange("lastStudiedInstitution", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Address & Contact */}
          {currentStep === 3 && (
            <div className="card">
              <div className="card-header">
                <h4>Address & Contact</h4>
              </div>
              <div className="card-body">
                <h5>Present Address</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Door No <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.doorNo}
                        onChange={(e) => handleChange("doorNo", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Street Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.streetName}
                        onChange={(e) =>
                          handleChange("streetName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Area <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.area}
                        onChange={(e) => handleChange("area", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Landmark</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.landmark}
                        onChange={(e) =>
                          handleChange("landmark", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Pincode <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.pincode}
                        onChange={(e) =>
                          handleChange("pincode", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Student Mobile <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.studentMobile}
                        onChange={(e) =>
                          handleChange("studentMobile", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Parents Mobile <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.parentsMobile}
                        onChange={(e) =>
                          handleChange("parentsMobile", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <h5>Scholarship & Accommodation</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Eligible for Scholarship?
                      </label>
                      <select
                        className="form-select"
                        value={formData.eligibleForScholarship}
                        onChange={(e) =>
                          handleChange("eligibleForScholarship", e.target.value)
                        }
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>
                  {formData.eligibleForScholarship === "Yes" && (
                    <>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Caste</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.scholarshipCaste}
                            onChange={(e) =>
                              handleChange("scholarshipCaste", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Category</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.scholarshipCategory}
                            onChange={(e) =>
                              handleChange(
                                "scholarshipCategory",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Accommodation</label>
                      <select
                        className="form-select"
                        value={formData.accommodationType}
                        onChange={(e) =>
                          handleChange("accommodationType", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Bus">Bus</option>
                        <option value="Day Scholar">Day Scholar</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Academic Details */}
          {currentStep === 4 && (
            <div className="card">
              <div className="card-header">
                <h4>Academic Details</h4>
              </div>
              <div className="card-body">
                <h5>10th Class</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Year <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.sscYear}
                        onChange={(e) =>
                          handleChange("sscYear", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Board <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.sscBoard}
                        onChange={(e) =>
                          handleChange("sscBoard", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Total Marks</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.sscMarks}
                        onChange={(e) =>
                          handleChange("sscMarks", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Percentage <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.sscPercentag}
                        onChange={(e) =>
                          handleChange("sscPercentag", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Division</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.sscDivision}
                        onChange={(e) =>
                          handleChange("sscDivision", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <h5>Intermediate</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Year</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.interYear}
                        onChange={(e) =>
                          handleChange("interYear", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Board</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.interBoard}
                        onChange={(e) =>
                          handleChange("interBoard", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Total Marks</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.interMarks}
                        onChange={(e) =>
                          handleChange("interMarks", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Percentage</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.interPercentage}
                        onChange={(e) =>
                          handleChange("interPercentage", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Division</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.interDivision}
                        onChange={(e) =>
                          handleChange("interDivision", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <h5>Diploma/Degree (if applicable)</h5>
                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Year</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.diplomaYear}
                        onChange={(e) =>
                          handleChange("diplomaYear", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Board</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.diplomaBoard}
                        onChange={(e) =>
                          handleChange("diplomaBoard", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Total Marks</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.diplomaMarks}
                        onChange={(e) =>
                          handleChange("diplomaMarks", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Percentage</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.diplomaPercentage}
                        onChange={(e) =>
                          handleChange("diplomaPercentage", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Division</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.diplomaDivision}
                        onChange={(e) =>
                          handleChange("diplomaDivision", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Undertaking & Fees */}
          {currentStep === 5 && (
            <div className="card">
              <div className="card-header">
                <h4>Fee Details</h4>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">College Fee</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.collegeFee}
                        onChange={(e) =>
                          handleChange("collegeFee", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Hostel/Bus Fee</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.hostelBusFee}
                        onChange={(e) =>
                          handleChange("hostelBusFee", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Other Fee</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.otherFee}
                        onChange={(e) =>
                          handleChange("otherFee", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Fee Concession</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.feeConsession}
                        onChange={(e) =>
                          handleChange("feeConsession", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            {currentStep < 5 ? (
              <button className="btn btn-primary" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => setShowModal(true)}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Submit Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Submission</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to submit your application?</p>
                <div className="mt-3">
                  <strong>Form Data Summary:</strong>
                  <ul className="mt-2">
                    <li>Student Name: {formData.studentName}</li>
                    <li>Branch: {formData.branch}</li>
                    <li>Email: {formData.email}</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm;
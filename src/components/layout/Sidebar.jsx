import React, { useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/layout.css";
import redressalcomittee from "../../assets/files/redressalcomittee.pdf"; // Path to the grievance redressal PDF
import nss from "../../assets/files/nss.pdf"; // Path to the NSS PDF
import antiraggingPdf from "../../assets/files/antiragging.pdf"; // Path to the Anti-Ragging PDF
import rti from "../../assets/files/RTI.pdf";
import antiSexualHarassment from "../../assets/files/antiSexualHaressement.pdf";
import undertaking from "../../assets/files/UNDERTAKING.pdf"; // Path to the undertaking PDF
import icc from "../../assets/files/icc.pdf"; // Path to the ICC PDF
import sedgs from "../../assets/files/sedgs.pdf"; // Path to the SEDGs PDF
import Acceccebility from "../../assets/files/Acceccebility.pdf"; // Path to the Acceccebility PDF
import SSEInstituational from "../../assets/files/SSEInstitutionalDevelopmentPlan.pdf"; // Path to the SSEInstituational PDF
import UGCFeeRefundPolicy from "../../assets/files/UGCFeeRefundPolicy.pdf"; // Path to the UGCFeeRefundPolicy PDF
import RDC from "../../assets/files/RDC.pdf"; // Path to the RDC PDF
/**
 * Sidebar component for quick navigation options
 * Positioned on the right side of the screen
 * Updated with scroll-to-top functionality and external link handling
 * Merged Academics and Programmes sections
 * Enhanced with search functionality
 */
const Sidebar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showUGCModal, setShowUGCModal] = useState(false);
  const navigate = useNavigate();

  // Document files data
  const documentFiles = [
    { name: "Grievance Redressal Committee", file: redressalcomittee },
    { name: "NSS Document", file: nss },
    { name: "Anti-Ragging Policy", file: antiraggingPdf },
    { name: "RTI Information", file: rti },
    { name: "Anti-Sexual Harassment Policy", file: antiSexualHarassment },
    { name: "Undertaking Document", file: undertaking },
    { name: "ICC Document", file: icc },
    { name: "SEDGs Document", file: sedgs },
    { name: "Campus Accessibility", file: Acceccebility },
    { name: "SSE Institutional Development Plan", file: SSEInstituational },
    { name: "UGC Fee Refund Policy", file: UGCFeeRefundPolicy },
    { name: "Research & Development Cell", file: RDC },
  ];

  // UGC Documents data for the modal
  const ugcDocuments = [
    {
      id: "icc-doc",
      title: "Internal Complaints Committee (ICC)",
      description: "Guidelines and procedures for handling sexual harassment complaints and ensuring a safe campus environment.",
      file: icc,
      icon: "fas fa-balance-scale",
      bgColor: "bg-primary"
    },
    {
      id: "grievance-doc", 
      title: "Student Grievance Redressal",
      description: "Official procedures for filing and tracking student complaints and grievances effectively.",
      file: redressalcomittee,
      icon: "fas fa-comments",
      bgColor: "bg-info"
    },
    {
      id: "anti-ragging-doc",
      title: "Anti-Ragging Policy",
      description: "Zero-tolerance policy towards ragging and harassment with complaint procedures and guidelines.",
      file: antiraggingPdf,
      icon: "fas fa-shield-alt",
      bgColor: "bg-warning"
    },
    {
      id: "institutional-development-doc",
      title: "Institutional Development Plan",
      description: "Strategic development plan (2025-2030) for institutional growth, governance, and academic excellence.",
      file: SSEInstituational,
      icon: "fas fa-chart-line",
      bgColor: "bg-success"
    },
    {
      id: "sedgs-doc",
      title: "SEDG's Committee",
      description: "Sustainable Development Goals initiatives for environmental sustainability and social equity.",
      file: sedgs,
      icon: "fas fa-leaf",
      bgColor: "bg-success"
    },
    {
      id: "accessibility-doc",
      title: "Accessibility Guidelines",
      description: "Comprehensive accessibility measures and barrier-free infrastructure for persons with disabilities.",
      file: Acceccebility,
      icon: "fas fa-wheelchair",
      bgColor: "bg-info"
    },
    {
      id: "research-development-doc",
      title: "Research & Development Cell",
      description: "Research committee promoting innovation, industry collaboration, and ethical research practices.",
      file: RDC,
      icon: "fas fa-flask",
      bgColor: "bg-primary"
    },
    {
      id: "fee-refund-doc",
      title: "UGC Fee Refund Policy",
      description: "Official UGC guidelines for admission cancellation, withdrawal procedures, and refund processing.",
      file: UGCFeeRefundPolicy,
      icon: "fas fa-money-check-alt",
      bgColor: "bg-warning"
    }
  ];

  // Toggle submenu function
  const toggleSubmenu = useCallback((menuName) => {
    setActiveSubmenu((prevMenu) => (prevMenu === menuName ? null : menuName));
    setShowSearchResults(false); // Hide search results when opening submenu
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  // Handle navigation with scroll to top
  const handleNavigation = useCallback(
    (path, isExternalLink = false) => {
      setActiveSubmenu(null);
      setShowSearchResults(false);
      setSearchTerm("");
      if (sidebarOpen) {
        setSidebarOpen(false);
      }

      if (isExternalLink) {
        // Open external link in a new tab
        window.open(path, "_blank", "noopener,noreferrer");
      } else {
        // Navigate internally
        navigate(path);
        window.scrollTo(0, 0);
      }
    },
    [navigate, sidebarOpen]
  );

  // Handle search input
  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      // Check if user is searching for "ugc"
      if (value.toLowerCase().includes("ugc")) {
        setShowUGCModal(true);
        setShowDocumentModal(false);
        setShowSearchResults(false);
      } else {
        setShowDocumentModal(true);
        setShowUGCModal(false);
        setShowSearchResults(false);
      }
    } else {
      setShowDocumentModal(false);
      setShowUGCModal(false);
      setShowSearchResults(false);
    }

    setActiveSubmenu(null); // Close any open submenu when searching
  }, []);

  // Handle document download
  const handleDocumentDownload = useCallback((file, fileName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setShowSearchResults(false);
    setShowDocumentModal(false);
    setShowUGCModal(false);
  }, []);

  // College login URL - replace with actual URL when available
  const collegeLoginUrl =
    "https://webprosindia.com/sanskrithi/default.aspx?ReturnUrl=%2fsanskrithi%2fAdminMaster1.aspx%3flicExp%3dFalse&licExp=False"; // Replace with your actual login URL

  // Navigation data structure with colors - Merged Academics and Programmes
  const navData = [
    {
      name: "About Us",
      color: "#28A745", // Green
      icon: "fas fa-plus",
      submenu: [
        { title: "About College", link: "/about/college" },
        { title: "Leadership", link: "/about/leadership" },
        { title: "NAAC", link: "/about/NAAC" },
      ],
    },
    {
      name: "UGC Compliance",
      color: "#E04084", // Pink
      icon: "fas fa-chevron-right",
      link: "/about/committees",
      directLink: true,
    },
    {
      name: "Academics",
      color: "#F9843D", // Orange
      icon: "fas fa-plus",
      submenu: [
        { title: "Courses", link: "/academics/courses" },
        { title: "Scholarship", link: "/academics/scholarship" },
        { title: "Our Labs", link: "/academics/labs" },
        { title: "All Programmes", link: "/programmes/all" },
        {
          title: "Undergraduate Programmes",
          link: "/programmes/undergraduate",
        },
        { title: "MTech Programmes", link: "/programmes/mtech" },
      ],
    },
    {
      name: "Life @ SSE",
      color: "#1D9DD9", // Blue
      icon: "fas fa-plus",
      submenu: [
        { title: "Life @ SSE", link: "/life/overview" },
        { title: "Academic Facilities", link: "/life/academic-facilities" },
        { title: "On Campus Facilities", link: "/life/campus-facilities" },
        { title: "Hostel Life", link: "/life/hostel-life" },
        { title: "Health and Safety", link: "/life/health-safety" },
        { title: "SSE Sports", link: "/life/sports" },
      ],
    },
    {
      name: "Admissions",
      color: "#6C757D", // Grey
      icon: "fas fa-plus",
      submenu: [
        { title: "Overview", link: "/admissions/overview" },
        { title: "Admission Process", link: "/admissions/admissionprocess" },
        { title: "Fee Structure", link: "/admissions/fees" },
        { title: "Admission Enquiry", link: "/admissions/enquiry" },
        { title: "Admission Form", link: "/admissions/admissionform" },
      ],
    },

    {
      name: "Placements",
      color: "#F9843D", // Orange
      icon: "fas fa-plus",
      submenu: [
        {
          title: "Placements",
          link: "/placement/placement",
        },
        { title: "Success Stories", link: "/placement/placement-success" },
      ],
    },
    {
      name: "Research",
      color: "#6C757D", // Grey
      icon: "fas fa-plus",
      submenu: [
        { title: "Overview", link: "/research/overview" },
        { title: "Research Publications", link: "/research/publications" },
        { title: "Research Achievements", link: "/research/achievements" },
      ],
    },
    {
      name: "IQAC",
      color: "#E04084", // Pink
      icon: "fas fa-chevron-right",
      link: "/iqac",
      directLink: true,
    },
    {
      name: "RIT",
      color: "#6C757D", // Grey
      icon: "fas fa-chevron-right",
      link: "/rit",
      directLink: true,
    },
    {
      name: "College Login",
      color: "#F9843D", // Orange
      icon: "fas fa-chevron-right", // Changed to login icon
      link: collegeLoginUrl,
      directLink: true,
      isExternal: true,
    },
  ];

  // Search functionality - memoized for performance
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const results = [];
    const searchTermLower = searchTerm.toLowerCase();

    navData.forEach((item) => {
      // Check main menu item
      if (item.name.toLowerCase().includes(searchTermLower)) {
        results.push({
          type: "main",
          title: item.name,
          link: item.link,
          color: item.color,
          isExternal: item.isExternal,
          directLink: item.directLink,
        });
      }

      // Check submenu items
      if (item.submenu) {
        item.submenu.forEach((subItem) => {
          if (subItem.title.toLowerCase().includes(searchTermLower)) {
            results.push({
              type: "sub",
              title: subItem.title,
              parent: item.name,
              link: subItem.link,
              color: item.color,
              isExternal: subItem.isExternal,
            });
          }
        });
      }
    });

    return results;
  }, [searchTerm, navData]);

  // Filtered documents based on search term
  const filteredDocuments = useMemo(() => {
    if (!searchTerm.trim()) return documentFiles;

    const searchTermLower = searchTerm.toLowerCase();
    return documentFiles.filter((doc) =>
      doc.name.toLowerCase().includes(searchTermLower)
    );
  }, [searchTerm, documentFiles]);

  return (
    <>
      {/* Vertical Sidebar Menu (always visible) */}
      <div className="vertical-sidebar">
        {navData.map((item, index) => (
          <div
            key={index}
            className={`vertical-menu-item ${
              activeSubmenu === item.name ? "active" : ""
            }`}
            style={{ backgroundColor: item.color }}
            onClick={() => {
              if (item.directLink) {
                handleNavigation(item.link, item.isExternal);
              } else {
                toggleSubmenu(item.name);
              }
            }}
          >
            <div className="vertical-menu-link" role="button">
              <i
                className={
                  item.icon ||
                  (item.directLink ? "fas fa-chevron-right" : "fas fa-plus")
                }
              ></i>
              <span className="menu-item-name">{item.name}</span>
              {item.isExternal && (
                <span className="external-link-icon ms-1">
                  <i
                    className="fas fa-external-link-alt"
                    style={{ fontSize: "0.7em" }}
                  ></i>
                </span>
              )}
            </div>
          </div>
        ))}
        <div className="search-input-container">
          <i className="fas fa-search search-input-icon"></i>
          <input
            type="text"
            placeholder="search documents (Try 'UGC')"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Document Search Modal */}
      {showDocumentModal && (
        <div className="document-modal">
          <div className="document-modal-content">
            <div className="document-modal-header">
              <h3>Search Results for "{searchTerm}"</h3>
              <button
                className="close-modal"
                onClick={() => setShowDocumentModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="document-list">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="document-item"
                    onClick={() => window.open(doc.file, "_blank")}
                  >
                    <i className="fas fa-file-pdf document-icon"></i>
                    <span className="document-name">{doc.name}</span>
                    <i className="fas fa-download download-icon"></i>
                  </div>
                ))
              ) : (
                <div className="no-documents-found">
                  <i
                    className="fas fa-search"
                    style={{
                      fontSize: "2em",
                      opacity: "0.3",
                      marginBottom: "10px",
                    }}
                  ></i>
                  <p>No documents found for "{searchTerm}"</p>
                  <small>Try searching with different keywords</small>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* UGC Documents Modal */}
      {showUGCModal && (
        <div className="ugc-modal-overlay" onClick={() => setShowUGCModal(false)}>
          <div className="ugc-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="ugc-modal-header">
              <h2 className="mb-0">
                <i className="fas fa-university me-2 text-primary"></i>
                UGC Compliance Documents
              </h2>
              <button 
                className="close-modal"
                onClick={() => setShowUGCModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="ugc-modal-body">
              <p className="text-muted mb-4">
                Access important UGC compliance documents and institutional policies
              </p>
              
              <div className="ugc-documents-grid">
                {ugcDocuments.map((doc) => (
                  <div key={doc.id} className="ugc-document-card" onClick={() => window.open(doc.file, "_blank")}>
                    <div className="card-icon-wrapper">
                      <div className={`card-icon ${doc.bgColor}`}>
                        <i className={doc.icon}></i>
                      </div>
                    </div>
                    <div className="card-content">
                      <h5 className="card-title">{doc.title}</h5>
                      <p className="card-description">{doc.description}</p>
                      <div className="card-action">
                        <i className="fas fa-download me-2"></i>
                        <span>Download PDF</span>
                        <i className="fas fa-external-link-alt ms-2 small"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results Panel */}
      {showSearchResults && searchResults.length > 0 && (
        <div className="search-results-panel">
          <div className="submenu-header">
            <h2>Search Results</h2>
            <button
              className="close-submenu"
              onClick={(e) => {
                e.stopPropagation();
                clearSearch();
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="submenu-content">
            <div className="submenu-items">
              {searchResults.map((result, idx) => (
                <div
                  key={idx}
                  className="submenu-link search-result-item"
                  onClick={() =>
                    result.directLink
                      ? handleNavigation(result.link, result.isExternal)
                      : handleNavigation(result.link, result.isExternal)
                  }
                  role="button"
                >
                  <div className="search-result-content">
                    <div
                      className="search-result-indicator"
                      style={{ backgroundColor: result.color }}
                    ></div>
                    <div className="search-result-text">
                      <span className="search-result-title">
                        {result.title}
                      </span>
                      {result.type === "sub" && (
                        <span className="search-result-parent">
                          in {result.parent}
                        </span>
                      )}
                    </div>
                    {result.isExternal && (
                      <i
                        className="fas fa-external-link-alt ms-2"
                        style={{ fontSize: "0.8em" }}
                      ></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Results Message */}
      {showSearchResults && searchResults.length === 0 && searchTerm.trim() && (
        <div className="search-results-panel">
          <div className="submenu-header">
            <h2>Search Results</h2>
            <button
              className="close-submenu"
              onClick={(e) => {
                e.stopPropagation();
                clearSearch();
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="submenu-content">
            <div className="no-results">
              <i
                className="fas fa-search"
                style={{
                  fontSize: "2em",
                  opacity: "0.3",
                  marginBottom: "10px",
                }}
              ></i>
              <p>No results found for "{searchTerm}"</p>
              <small>Try searching with different keywords</small>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Submenu Panel */}
      {activeSubmenu && (
        <div className="submenu-panel">
          <div className="submenu-header">
            <h2>{activeSubmenu}</h2>
            <button
              className="close-submenu"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setActiveSubmenu(null);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="submenu-content">
            <div className="submenu-items">
              {navData
                .find((item) => item.name === activeSubmenu)
                ?.submenu.map((subItem, idx) => (
                  <div
                    key={idx}
                    className="submenu-link"
                    onClick={() =>
                      handleNavigation(subItem.link, subItem.isExternal)
                    }
                    role="button"
                  >
                    {subItem.title}
                    {subItem.isExternal && (
                      <i
                        className="fas fa-external-link-alt ms-2"
                        style={{ fontSize: "0.8em" }}
                      ></i>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay when submenu, search results, document modal, or UGC modal are open */}
      {(activeSubmenu || showSearchResults || showDocumentModal || showUGCModal) && (
        <div
          className="submenu-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setActiveSubmenu(null);
            setShowSearchResults(false);
            setShowDocumentModal(false);
            setShowUGCModal(false);
          }}
        ></div>
      )}

      <style jsx>{`
        /* Simple search input styling */
        .search-input-container {
          position: relative;
          margin: 5px 0;
        }
        .search-input {
          width: 100%;
          padding: 10px 10px 10px 35px;
          border: none;
          border-radius: 5px;
          font-size: 12px;
          background-color: #e04084; /* Pink */
          color: #fff; /* Text color */
        }

        .search-input::placeholder {
          color: #fff; /* Placeholder text color */
        }

        .search-input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          font-size: 12px;
          z-index: 1;
          color: #fff;
        }

        /* Document Modal Styles */
        .document-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .document-modal-content {
          background: white;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          max-height: 70vh;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .document-modal-header {
          display: flex;
          justify-content: between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
          background: #f8f9fa;
        }

        .document-modal-header h3 {
          margin: 0;
          flex: 1;
          color: #333;
          font-size: 18px;
        }

        .close-modal {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          padding: 5px;
        }

        .close-modal:hover {
          color: #000;
        }

        .document-list {
          padding: 15px;
          max-height: 400px;
          overflow-y: auto;
        }

        .document-item {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }

        .document-item:hover {
          background: #f8f9fa;
          border-color: #007bff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
        }

        .document-icon {
          color: #dc3545;
          margin-right: 12px;
          font-size: 16px;
        }

        .document-name {
          flex: 1;
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        .download-icon {
          color: #28a745;
          font-size: 14px;
        }

        .no-documents-found {
          text-align: center;
          padding: 40px 20px;
          color: #6c757d;
        }

        .no-documents-found p {
          margin: 10px 0 5px 0;
          font-weight: 500;
        }

        .no-documents-found small {
          opacity: 0.7;
        }

        /* Search Results Panel Styles */
        .search-results-panel {
          position: fixed;
          top: 80px;
          right: 20px;
          width: 350px;
          max-height: 500px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          z-index: 999;
          overflow: hidden;
          animation: slideInRight 0.3s ease-out;
        }

        .search-result-item {
          padding: 12px 20px !important;
        }

        .search-result-content {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .search-result-indicator {
          width: 4px;
          height: 20px;
          border-radius: 2px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .search-result-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .search-result-title {
          font-weight: 500;
          color: #333;
          font-size: 14px;
        }

        .search-result-parent {
          font-size: 12px;
          color: #6c757d;
          margin-top: 2px;
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
          color: #6c757d;
        }

        .no-results p {
          margin: 10px 0 5px 0;
          font-weight: 500;
        }

        .no-results small {
          opacity: 0.7;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* External link icon styling */
        .external-link-icon {
          opacity: 0.7;
          vertical-align: super;
        }

        .vertical-menu-item:hover .external-link-icon {
          opacity: 1;
        }

        /* UGC Modal Styles */
        .ugc-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease-out;
        }

        .ugc-modal-content {
          background: white;
          border-radius: 16px;
          width: 95%;
          max-width: 1000px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.3s ease-out;
        }

        .ugc-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 1px solid #e9ecef;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .ugc-modal-header h2 {
          color: #343a40;
          font-weight: 600;
          font-size: 1.5rem;
        }

        .ugc-modal-body {
          padding: 32px;
          max-height: 70vh;
          overflow-y: auto;
        }

        .ugc-documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .ugc-document-card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .ugc-document-card:hover {
          transform: translateY(-5px);
          border-color: #007bff;
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.15);
        }

        .card-icon-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .card-icon.bg-primary {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
        }

        .card-icon.bg-info {
          background: linear-gradient(135deg, #17a2b8 0%, #117a8b 100%);
        }

        .card-icon.bg-warning {
          background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
        }

        .card-icon.bg-success {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.9rem;
          color: #6c757d;
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .card-action {
          display: flex;
          align-items: center;
          color: #007bff;
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: auto;
        }

        .ugc-document-card:hover .card-action {
          color: #0056b3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .sidebar-search-container {
            width: calc(100% - 40px);
            top: 10px;
            right: 20px;
          }

          .search-results-panel {
            width: calc(100% - 40px);
            right: 20px;
            top: 70px;
          }

          .ugc-modal-content {
            width: 98%;
            max-height: 95vh;
          }

          .ugc-modal-header {
            padding: 20px 24px;
          }

          .ugc-modal-header h2 {
            font-size: 1.3rem;
          }

          .ugc-modal-body {
            padding: 24px;
          }

          .ugc-documents-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ugc-document-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { Container, Row, Col, Card, Form, InputGroup, Badge, Pagination } from 'react-bootstrap';

/**
 * Research Publications page component - Updated with HAS Department Data
 */
const ResearchPublications = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Effect to reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedYear, selectedCategory]);
  
  // Pagination settings
  const itemsPerPage = 4;
  
  // Publications data from HAS department document
  const publications = [
    {
      id: 1,
      title: "Isolation Of Antimicrobial Agents That Disrupts The Formation Of Biofilm In Staphylococcus Aureus",
      authors: "Dr. Samba Sivaiah",
      journal: "Journal Of Pharmaceutical Analysis",
      year: 2025,
      volume: "Vol. 15 No. 1 (2025): January-June",
      issn: "ISSN:2095-1779",
      category: "biotechnology",
      abstract: "This research focuses on the isolation and characterization of antimicrobial agents capable of disrupting biofilm formation in Staphylococcus Aureus, providing insights into novel therapeutic approaches for bacterial infections."
    },
    {
      id: 2,
      title: "Synthesis Of Biological Nanoparticles From Proteus And Their Effect On Plantlet Growth",
      authors: "Dr. Samba Sivaiah",
      journal: "International Development Planning Review",
      year: 2025,
      volume: "Volume 24, Issue 01, 2025",
      issn: "ISSN:1474-6743",
      category: "nanotechnology",
      abstract: "Investigation of biological nanoparticle synthesis from Proteus bacteria and their potential applications in enhancing plantlet growth, contributing to sustainable agricultural practices."
    },
    {
      id: 3,
      title: "Protective Effect Of Phytochemical Constituents On Oxidative & Non Oxidative DNA Damage Induced By H2O2 & Aspirin",
      authors: "Dr. Samba Sivaiah",
      journal: "Journal Of Pharmaceutical Analysis",
      year: 2025,
      volume: "Vol. 15 No. 1 (2025): January-June",
      issn: "ISSN:2095-1779",
      category: "biochemistry",
      abstract: "Study on the protective mechanisms of phytochemical constituents against DNA damage caused by oxidative stress from H2O2 and aspirin, demonstrating potential therapeutic applications."
    },
    {
      id: 4,
      title: "Antimicrobial Activity of Different Rhizomes on Streptococcus Pneumoniae and Proteus Vulgaris and Preservative Efficacy in Commercial Yoghurt",
      authors: "Dr. Shabhana Palyam",
      journal: "Journal of Acta Scientiae",
      year: 2025,
      volume: "Acta Sci., 26(1), 2025",
      issn: "ISSN:2178-7727",
      category: "microbiology",
      abstract: "Comprehensive study on antimicrobial properties of various rhizomes including Solanum tuberosum, Ipomoea batatas, Zingiber officinale, Curcuma longa and Colocasia esculenta against pathogenic bacteria and their application as natural preservatives in yoghurt."
    },
    {
      id: 5,
      title: "Optimized Dewaxed Honeycomb Powder as a Promising and Eco-Friendly Alternative for the Removal of Malachite Green through Fixed Bed Column",
      authors: "Dr. Samba Sivaiah",
      journal: "Journal of Water Chemistry and Technology",
      year: 2024,
      volume: "Vol. 46, No. 5, pp. 476-484",
      issn: "ISSN: 1063-455X",
      category: "environmental",
      abstract: "Development of an eco-friendly water treatment method using optimized dewaxed honeycomb powder for efficient removal of malachite green dye from contaminated water through fixed bed column technology."
    },
    {
      id: 6,
      title: "Investigation of the Dielectric Characteristics of Chromium-substituted Zinc and Cobalt Nanoferrite Systems",
      authors: "Dr. Samba Sivaiah",
      journal: "Journal of Physics Conference Series (IOP) Publications",
      year: 2024,
      volume: "doi:10.1088/1742-6596/2886/1/012011",
      issn: "ISSN: 1742-6596",
      category: "materials",
      abstract: "Comprehensive analysis of dielectric properties of chromium-substituted zinc and cobalt nanoferrite systems, investigating their potential applications in electronic and magnetic devices."
    },
    {
      id: 7,
      title: "Performance Analysis of Neural Network in Electrical Load Forecasting",
      authors: "Dr. Hema Chandra",
      journal: "International Conference on Soft Computing and Pattern Recognition (SoCPaR 2023), Lecture Notes in Networks and Systems",
      year: 2025,
      volume: "vol 1245. Springer, Cham",
      doi: "doi.org/10.1007/978-3-031-81083-1_36",
      category: "computer",
      abstract: "Analysis of neural network performance in predicting electrical load patterns, contributing to smart grid optimization and energy management systems through advanced machine learning techniques."
    },
    {
      id: 8,
      title: "Solid Waste Classification Using Transformer Model",
      authors: "Dr. Hema Chandra",
      journal: "International Conference on Innovations in Bio-Inspired Computing and Applications Lecture Notes in Networks and Systems",
      year: 2025,
      volume: "vol 1229. Springer, Cham",
      doi: "doi.org/10.1007/978-3-031-78940-3_29",
      category: "computer",
      abstract: "Implementation of transformer models for automated solid waste classification, contributing to smart waste management systems and sustainable environmental practices through AI-driven solutions."
    }
  ];
  
  // Filter publications based on search term, year, and category
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    
    return matchesSearch && matchesYear && matchesCategory;
  });
  
  // Get unique years for filter dropdown
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  // Define categories based on actual research areas
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'biotechnology', name: 'Biotechnology' },
    { id: 'nanotechnology', name: 'Nanotechnology' },
    { id: 'biochemistry', name: 'Biochemistry' },
    { id: 'microbiology', name: 'Microbiology' },
    { id: 'environmental', name: 'Environmental Science' },
    { id: 'materials', name: 'Materials Science' },
    { id: 'computer', name: 'Computer Science' }
  ];
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPublications.slice(indexOfFirstItem, indexOfLastItem);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of results
    window.scrollTo({ top: document.getElementById('publications-list').offsetTop - 100, behavior: 'smooth' });
  };
  
  // Get category badge color from the college's brand colors
  const getCategoryColor = (category) => {
    switch(category) {
      case 'biotechnology': return 'success'; // Green
      case 'nanotechnology': return 'primary'; // Blue
      case 'biochemistry': return 'info'; // Light blue
      case 'microbiology': return 'warning'; // Yellow
      case 'environmental': return 'success'; // Green
      case 'materials': return 'secondary'; // Gray
      case 'computer': return 'primary'; // Blue
      default: return 'dark'; // Black
    }
  };
  
  // Get category name
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  // Publication statistics - updated based on actual data
  const publicationStats = [
    { value: "8+", label: "Research Papers", icon: "fas fa-book-open" },
    { value: "2", label: "Active Researchers", icon: "fas fa-user-graduate" },
    { value: "6+", label: "Research Areas", icon: "fas fa-flask" },
    { value: "2", label: "Years Active", icon: "fas fa-calendar-alt" }
  ];

  // Research resources data
  const researchResources = [
    {
      title: "Digital Library",
      description: "Access to thousands of journals, e-books, and research databases",
      icon: "fas fa-book",
      link: "/library/digital"
    },
    {
      title: "Research Guides",
      description: "Subject-specific guides to research resources and methodologies",
      icon: "fas fa-compass",
      link: "/library/guides"
    },
    {
      title: "Citation Tools",
      description: "Tools and resources for proper citation and reference management",
      icon: "fas fa-quote-left",
      link: "/library/citation"
    }
  ];

  return (
    <div className="research-publications-page bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Research Publications</h1>
              <p className="lead text-white opacity-90">
                Scholarly contributions by our Humanities and Applied Sciences faculty to the global knowledge base
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Publications Overview */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionHeader
                subtitle="Knowledge Dissemination"
                title="HAS Department Research Output"
                description=""
                centered={false}
              />
              <p className="mb-4">
                The Humanities and Applied Sciences department at Sanskriti School of Engineering actively contributes 
                to advancing knowledge through high-quality research publications in biotechnology, environmental science, 
                computer applications, and materials science.
              </p>
              <p>
                Our faculty members focus on interdisciplinary research that addresses real-world challenges, 
                from antimicrobial agents to sustainable waste management solutions.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-4 text-center">
                {publicationStats.map((stat, index) => (
                  <Col md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-translate-y">
                      <Card.Body className="p-4">
                        <div className="display-6 text-primary mb-2">
                          <i className={stat.icon}></i>
                        </div>
                        <h3 className="h2 fw-bold mb-2">{stat.value}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Publications Search and Filter */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Find Publications</h4>
                  
                  {/* Search Input */}
                  <Form.Group className="mb-4">
                    <InputGroup>
                      <Form.Control
                        placeholder="Search by title, author, or keywords..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search publications"
                      />
                      <Button
                        variant="primary"
                        text=""
                        className="d-flex align-items-center justify-content-center px-3"
                        onClick={() => {}} // No action needed as search is real-time
                      >
                        <i className="fas fa-search"></i>
                      </Button>
                    </InputGroup>
                  </Form.Group>
                  
                  {/* Filters */}
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Filter by Year</Form.Label>
                        <Form.Select 
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          aria-label="Filter by year"
                        >
                          <option value="all">All Years</option>
                          {years.map(year => (
                            <option key={year} value={year.toString()}>{year}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Filter by Category</Form.Label>
                        <Form.Select 
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          aria-label="Filter by category"
                        >
                          {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Publications List */}
          <div id="publications-list">
            {currentItems.length > 0 ? (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="mb-0">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPublications.length)} of {filteredPublications.length} publications
                  </p>
                  <Badge bg="primary" className="px-3 py-2">
                    <i className="fas fa-flask me-2"></i>HAS Department Research
                  </Badge>
                </div>
                
                <Row className="g-4">
                  {currentItems.map(publication => (
                    <Col lg={6} key={publication.id}>
                      <Card className="h-100 border-0 shadow-sm hover-translate-y">
                        <Card.Body className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <Badge 
                              bg={getCategoryColor(publication.category)} 
                              className="px-3 py-2"
                            >
                              {getCategoryName(publication.category)}
                            </Badge>
                            <Badge bg="light" text="dark" className="px-3 py-2">
                              <i className="fas fa-calendar-alt me-1"></i> {publication.year}
                            </Badge>
                          </div>
                          
                          <h3 className="h5 fw-bold mb-3" style={{ lineHeight: "1.4" }}>
                            {publication.title}
                          </h3>
                          
                          <div className="mb-3">
                            <p className="text-secondary mb-2 fw-semibold">
                              <i className="fas fa-user me-2"></i>{publication.authors}
                            </p>
                            
                            <p className="small text-muted mb-2">
                              <i className="fas fa-book me-2"></i>
                              <strong>{publication.journal}</strong>
                            </p>
                            
                            <p className="small text-muted mb-2">
                              <i className="fas fa-bookmark me-2"></i>
                              {publication.volume}
                            </p>
                            
                            {publication.issn && (
                              <Badge bg="light" text="dark" className="me-2">
                                {publication.issn}
                              </Badge>
                            )}
                            
                            {publication.doi && (
                              <Badge bg="light" text="dark">
                                <i className="fas fa-link me-1"></i> {publication.doi}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="border-top pt-3 mt-3">
                            <h6 className="fw-bold mb-2">Abstract</h6>
                            <p className="small text-muted mb-0" style={{ lineHeight: "1.5" }}>
                              {publication.abstract}
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-center mt-5">
                    <Pagination>
                      <Pagination.First 
                        onClick={() => handlePageChange(1)} 
                        disabled={currentPage === 1}
                      />
                      <Pagination.Prev 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                      />
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => 
                          page === 1 || 
                          page === totalPages || 
                          Math.abs(page - currentPage) <= 1
                        )
                        .map((page, index, array) => {
                          // Add ellipsis where needed
                          if (index > 0 && page - array[index - 1] > 1) {
                            return (
                              <React.Fragment key={`ellipsis-${page}`}>
                                <Pagination.Ellipsis disabled />
                                <Pagination.Item 
                                  active={page === currentPage}
                                  onClick={() => handlePageChange(page)}
                                >
                                  {page}
                                </Pagination.Item>
                              </React.Fragment>
                            );
                          }
                          return (
                            <Pagination.Item 
                              key={page} 
                              active={page === currentPage}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </Pagination.Item>
                          );
                        })}
                      
                      <Pagination.Next 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                      />
                      <Pagination.Last 
                        onClick={() => handlePageChange(totalPages)} 
                        disabled={currentPage === totalPages}
                      />
                    </Pagination>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <div className="display-6 text-muted mb-3">
                  <i className="fas fa-search"></i>
                </div>
                <h3>No publications found</h3>
                <p className="text-muted">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </Container>
      </section>
      
      {/* Resources Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <Container className="py-4">
          <Row className="justify-content-center mb-4">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-3">Research Resources</h2>
              <p className="opacity-90 mb-0">
                Access journals, databases, and research guides through our library resources
              </p>
            </Col>
          </Row>
          
          <Row className="g-4 justify-content-center">
            {researchResources.map((resource, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 bg-white bg-opacity-10 hover-translate-y">
                  <Card.Body className="p-4 text-center">
                    <div className="display-6 mb-3">
                      <i className={resource.icon}></i>
                    </div>
                    <h3 className="h5 mb-3">{resource.title}</h3>
                    <p className="mb-4">{resource.description}</p>
                    <Button
                      variant="cta-secondary"
                      text="Access Resource"
                      href={resource.link}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResearchPublications;
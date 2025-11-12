import React from 'react';

/**
 * Reusable Section Header component with Bootstrap styling
 */
const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  className = ''
}) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className} mb-5`}>
      {subtitle && (
        <h5 className="text-uppercase letter-spacing-2 fw-semibold fade-in">
          {subtitle}
        </h5>
      )}
      
      {title && (
        <h2 className="h1 fw-bold mb-3 fade-in delay-1">
          {title}
        </h2>
      )}
      
      {description && (
        <p className="text-secondary mx-auto fade-in delay-2" style={{ maxWidth: centered ? '700px' : 'none' }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
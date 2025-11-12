import React from 'react';
import '../../styles/components.css';

/**
 * Reusable Card component with subcomponents for structure
 */
const Card = ({ 
  variant = 'default',
  children, 
  className = '',
  style,
  ...props 
}) => {
  return (
    <div 
      className={`card card-${variant} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// Subcomponents
Card.Icon = ({ icon, color, backgroundColor, className = '' }) => (
  <div 
    className={`card-icon ${className}`}
    style={{ 
      backgroundColor: backgroundColor, 
      color: color 
    }}
  >
    <i className={icon}></i>
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);

Card.Content = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);

export default Card;
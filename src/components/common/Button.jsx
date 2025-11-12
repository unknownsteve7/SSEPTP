import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component with Bootstrap-based variants
 */
const Button = ({
  variant = 'primary',
  text,
  href,
  icon,
  onClick,
  className = '',
  size = '',
  block = false,
  disabled = false,
  type = 'button',
  ...props
}) => {
  // Map variant to Bootstrap classes
  const getButtonClasses = () => {
    const baseClasses = 'btn d-inline-flex align-items-center justify-content-center gap-2';
    const sizeClass = size ? `btn-${size}` : '';
    const blockClass = block ? 'w-100' : '';
    
    let variantClass = 'btn-primary';
    
    switch (variant) {
      case 'secondary':
        variantClass = 'btn-outline-light border-2 text-white hover-white';
        break;
      case 'read-more':
        variantClass = 'btn-primary';
        break;
      case 'cta-primary':
        variantClass = 'btn-light text-primary fw-medium px-4 py-2 rounded-pill';
        break;
      case 'cta-secondary':
        variantClass = 'btn-outline-light text-white border-2 fw-medium px-4 py-2 rounded-pill';
        break;
      case 'view-all':
        variantClass = 'btn-dark';
        break;
      default:
        variantClass = 'btn-primary px-4 py-2 rounded-pill';
    }
    
    return `${baseClasses} ${variantClass} ${sizeClass} ${blockClass} ${className}`;
  };
  
  const buttonClass = getButtonClasses();
  
  if (href) {
    // Check if it's an external link or internal route
    if (href.startsWith('http') || href.startsWith('/downloads')) {
      return (
        <a 
          href={href}
          className={buttonClass}
          onClick={onClick}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...props}
        >
          <span>{text}</span>
          {icon && <i className={icon}></i>}
        </a>
      );
    }
    
    // For internal routing
    return (
      <Link
        to={href}
        className={buttonClass}
        onClick={onClick}
        {...props}
      >
        <span>{text}</span>
        {icon && <i className={icon}></i>}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span>{text}</span>
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;
import React from 'react';
import '../../styles/components.css';

/**
 * StatCard component for displaying statistics
 */
const StatCard = ({ value, label, className = '' }) => {
  return (
    <div className={`stat-card ${className}`}>
      <h3 className="stat-value">{value}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;
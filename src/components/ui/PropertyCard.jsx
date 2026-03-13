import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ id, image, title, price, details, className = '' }) => {
    return (
        <Link to={`/property/${id}`} className={`property-card block group ${className}`}>
            <div className="property-image aspect-[4/3] overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="mt-6">
                <h3 className="text-sm font-medium tracking-wide uppercase group-hover:text-[#D90000] transition-colors duration-300">{title}</h3>
                <p className="text-sm text-gray-500 mt-1">{price}</p>
                <p className="text-xs text-gray-400 mt-2">{details}</p>
            </div>
        </Link>
    );
};

export default PropertyCard;

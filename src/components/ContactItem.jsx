import React from 'react';

const ContactItem = ({ icon, title, description }) => {
  const IconComponent = icon; 

  return (
    <div className="info-item flex items-start space-x-4 mb-6" data-aos="fade-up" data-aos-delay="300">
      <IconComponent className="text-lg text-primary flex-shrink-0" /> 
      <div>
        <h3 className="font-semibold text-teal-400">{title}</h3>
        <p className="text-violet-400">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
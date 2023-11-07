// DynamicMarketingPhrase.js
import React, { useState, useEffect } from 'react';

const DynamicMarketingPhrase = ({ services }) => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const service = services[currentServiceIndex];
  
  return (
    <p className="font-size-30">
      Check out our amazing services like{' '}
      <span className="typing-animation text-orange-600">{service}</span>.
    </p>
  );
};

export default DynamicMarketingPhrase;

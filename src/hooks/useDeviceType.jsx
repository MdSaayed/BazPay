import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop'); // Default is desktop

  useEffect(() => {
    // Function to update device type
    const updateDeviceType = () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setDeviceType('mobile'); // Mobile
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setDeviceType('tablet'); // Tablet
      } else {
        setDeviceType('desktop'); // Desktop
      }
    };

    // Initial check
    updateDeviceType();

    // Listen to window resize events
    window.addEventListener('resize', updateDeviceType);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;

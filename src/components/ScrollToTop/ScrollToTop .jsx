import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]);

  return null;
};

export default ScrollToTop;

import { useEffect, useState } from 'react';

const useIsMobile = () => {
  // 640 is our beakpoint for tablet/mobile
  const [isMobile, setIsMobile] = useState(window?.innerWidth <= 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    // Set initial value on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;

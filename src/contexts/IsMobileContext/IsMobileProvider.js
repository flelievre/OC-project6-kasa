import React, {
  useState,
  useEffect,
} from 'react';
import IsMobileContext from './IsMobileContext';

const isMobile = (mobileMaxWidth = 480) => (
  window.innerWidth <= mobileMaxWidth
);

const IsMobileProvider = ({
  children,
  mobileMaxWidth = 480,
}) => {
  const [mobile, setMobile] = useState(isMobile(mobileMaxWidth));
  
  useEffect(() => {
    const adaptWidth = () => {
      const newValue = isMobile(mobileMaxWidth);
      setMobile(newValue);
    };
    adaptWidth();
    window.addEventListener('resize', adaptWidth);
    return () => {
      window.removeEventListener('resize', adaptWidth);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={mobile}>
      {children}
    </IsMobileContext.Provider>
  );
};

export default IsMobileProvider;

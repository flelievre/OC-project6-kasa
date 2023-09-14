import React, {
  useState,
  useEffect,
} from 'react';
import IsMobileContext from './IsMobileContext';

const isWidthMobile = (mobileMaxWidth = 480) => (
  window.innerWidth <= mobileMaxWidth
);

const IsMobileProvider = ({
  children,
  mobileMaxWidth = 480,
}) => {
  const [isMobile, setMobile] = useState(isWidthMobile(mobileMaxWidth));

  useEffect(() => {
    const adaptWidth = () => {
      const newValue = isWidthMobile(mobileMaxWidth);
      setMobile(newValue);
    };
    adaptWidth();
    window.addEventListener('resize', adaptWidth);
    return () => {
      window.removeEventListener('resize', adaptWidth);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
};

export default IsMobileProvider;

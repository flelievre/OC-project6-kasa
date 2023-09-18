import React from 'react';
import {
  logoWhite,
} from '../../../assets';
import useFooter from './Footer.logic/useFooter';
import styles from './Footer.module.scss';

const Footer = () => {
  const {
    shouldFooterBeFixed = false,
  } = useFooter();
  return (
    <>
      {shouldFooterBeFixed && (
        <div className={styles.block} />
      )}
      <footer
        className={shouldFooterBeFixed ? styles.fixed : ''}
      >
        <img
          src={logoWhite}
          alt="KASA white logo"
          width="122"
          height="39.44"
          loading="lazy"
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import {
  logoWhite,
} from '../../../assets';
import './Footer.module.scss';

const Footer = () => (
  <footer>
    <img
      src={logoWhite}
      alt="KASA white logo"
      width="122"
      height="39.44"
      loading="lazy"
    />
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;

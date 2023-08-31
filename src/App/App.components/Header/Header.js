import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  logoRed,
} from '../../../assets';
import styles from './Header.module.scss';

const Header = () => (
  <header>
    <img
      src={logoRed}
      alt="KASA red logo"
      width="188"
      height="68"
    />
    <nav>
      <ul>
        <li>
          <ReactRouterLink to="/">
            Accueil
          </ReactRouterLink>
        </li>
        <li>
          <ReactRouterLink to="about" className={styles.aboutLink}>
            À Propos
          </ReactRouterLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

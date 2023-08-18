import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  logoRed,
} from '../../assets';

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
          <ReactRouterLink to="about" className="text-decoration-none">
            À Propos
          </ReactRouterLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

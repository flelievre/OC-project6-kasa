import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

const Header = () => (
  <header>
    <span>
    KASA
    </span>
    <nav>
      <ul>
        <li>
          <ReactRouterLink to="/">
            Accueil
          </ReactRouterLink>
        </li>
        <li>
          <ReactRouterLink to="about">
            À Propos
          </ReactRouterLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

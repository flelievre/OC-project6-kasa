import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  logoRed,
} from '../../../assets';
import styles from './Header.module.scss';
import NAV_LINKS from './Header.constants/NAV_LINKS';
import useHeader from './Header.logic/useHeader';
  

const Header = () => {
  const {
    isRouteActive,
  } = useHeader();
  return (
    <header>
      <img
        src={logoRed}
        alt="KASA red logo"
        width="188"
        height="68"
      />
      <nav>
        <ul>
          {NAV_LINKS.map(({
            route = '',
            label = '',
          }) => (
            <li key={route}>
              <ReactRouterLink
                to={route}
                className={(
                  isRouteActive(route)
                    ? ''
                    : styles.linkInactive
                )}
              >
                {label}
              </ReactRouterLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

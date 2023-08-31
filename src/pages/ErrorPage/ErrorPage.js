import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => (
  <>
    <h1 className={styles.h1404}>404</h1>
    <h2 className={styles.h2404}>Oups! La page que vous demandez n'existe pas.</h2>
    <div className={styles.backToHomeLinkContainer}>
      <ReactRouterLink to="/" className={styles.link404}>
        Retourner sur la page d'accueil
      </ReactRouterLink>
    </div>
  </>
);

export default ErrorPage;

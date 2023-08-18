import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

const ErrorPage = () => (
  <>
    <h1 className="h1-404">404</h1>
    <h2 className="h2-404">Oups! La page que vous demandez n'existe pas.</h2>
    <div className="text-align-center margin-bottom-100px">
      <ReactRouterLink to="/" className="link-404">
        Retourner sur la page d'accueil
      </ReactRouterLink>
    </div>
  </>
);

export default ErrorPage;

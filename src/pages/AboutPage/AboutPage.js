import React from 'react';
import styles from './AboutPage.module.scss';
import {
  Accordion,
  ImageHeader,
} from '../../components';
import {
  aboutPageBg,
} from '../../assets';

const AboutPage = () => (
  <>
    <ImageHeader
      imgSrc={aboutPageBg}
      imgAlt="view of mountains"
    />
    <section className={styles.accordionContainer}>
      <Accordion
        title="Fiabilité"
      >
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Accordion>
      <Accordion
        title="Respect"
      >
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbaration du voisinage entraînera une exclusion de notre plateforme.</p>
      </Accordion>
      <Accordion
        title="Service"
      >
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbaration du voisinage entraînera une exclusion de notre plateforme.</p>
      </Accordion>
      <Accordion
        title="Sécurité"
      >
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Accordion>
    </section>
  </>
);

export default AboutPage;

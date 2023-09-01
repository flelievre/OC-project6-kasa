import React from 'react';
import styles from './ImageHeader.module.scss';

const ImageHeader = ({
  title = '',
  imgSrc = '',
  imgAlt = 'title',
}) => (
  <div className={styles.imageTitleContainer}>
    <div className={styles.opacityBg} />
    <img src={imgSrc} alt={imgAlt}></img>
    {title && (<h1>{title}</h1>)}
  </div>
);

export default ImageHeader;

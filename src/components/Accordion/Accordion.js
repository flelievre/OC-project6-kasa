import {
  useState,
} from 'react';
import {
  arrow,
} from '../../assets';
import styles from './Accordion.module.scss';

const Accordion = ({
  title = '',
  className = '',
  children = <></>,
} = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''} ${className}`}>
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        {title}
        <img
          src={arrow}
          alt="carrousel arrow"
          className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
        />
      </div>
      <div className={styles.accordionContent}>{children}</div>
    </div>
  );
};

export default Accordion;

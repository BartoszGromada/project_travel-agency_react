import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TripSummary.scss';
import {Col} from 'react-flexbox-grid';

const TripSummary = ({id, image, name, cost, days, tags}) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    <Link to={`/trip/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{days} days</span>
          <span>from {cost}</span>
        </div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span className={styles.tag} key={tag.toString()}>{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  </Col>
);

TripSummary.propTypes = {
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  image: propTypes.string,
  name: propTypes.string,
  intro: propTypes.string,
  cost: propTypes.string,
  days: propTypes.number,
  tags: propTypes.array,
};

export default TripSummary;

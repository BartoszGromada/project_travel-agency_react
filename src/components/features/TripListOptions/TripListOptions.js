import React from 'react';
import propTypes from 'prop-types';
import styles from './TripListOptions.scss';

import {Row, Col} from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag, checked) {
    if(checked) {
      this.props.addTag(tag);
    } else {
      this.props.removeTag(tag);
    }
  }

  handleRegions(region, checked) {
    if(checked) {
      this.props.addRegion(region);
    } else {
      this.props.removeRegion(region);
    }
  }

  handleDuration(type, value) {
    this.props.changeDuration({type, value});
  }

  handleSearch(phrase) {
    this.props.changeSearchPhrase(phrase);
  }

  render() {
    const {tags, regions, filters} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max='14' onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min='1' max='14' onChange={event => this.handleDuration('to', event.currentTarget.value,)} />
              </label>
            </div>
          </Col>
          <Col lg={2}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
          <Col lg={2}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by Regions</summary>
                <div className={styles.dropdown}>
                  {Object.keys(regions).map(region => (
                    <label key={region} className={styles.option}>
                      <input type='checkbox' checked={filters.regions.indexOf(region) > -1} onChange={event => this.handleRegions(region, event.currentTarget.checked)}/>
                      {region}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  tags: propTypes.object,
  regions: propTypes.object,
  filters: propTypes.object,
  changeSearchPhrase: propTypes.func,
  changeDuration: propTypes.func,
  addTag: propTypes.func,
  removeTag: propTypes.func,
  addRegion: propTypes.func,
  removeRegion: propTypes.func,
};

export default TripListOptions;

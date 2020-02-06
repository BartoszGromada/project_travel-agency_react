import React from 'react';
import propTypes from 'prop-types';

import TripSummary from '../../features/TripSummary/TripSummary';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TripListOptions from '../../features/TripListOptions/TripListOptionsContainer';

const Trips = ({trips}) => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='All trips' />
          <TripListOptions />
          <Row>
            {trips.length ? trips.map(trip => (
              <TripSummary key={trip.id} {...trip} />
            )) : (
              <p>Sorry, no results found. Try adjusting the filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Grid>
  </Section>
);

Trips.propTypes = {
  trips: propTypes.arrayOf(propTypes.object),
};

export default Trips;

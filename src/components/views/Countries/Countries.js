import React from 'react';
import propTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import CountrySummary from '../../features/CountrySummary/CountrySummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row} from 'react-flexbox-grid';

const Countries = ({countries}) => (
  <Section>
    <Grid>
      <PageTitle text='All countries' />
      <Row between="md">
        {Object.keys(countries).map(code => (
          <CountrySummary key={code} {...countries[code]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

Countries.propTypes = {
  countries: propTypes.objectOf(propTypes.object),
};

export default Countries;

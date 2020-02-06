import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import propTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';
import CountryContainer from './components/views/Country/CountryContainer';
import TripContainer from './components/views/Trip/TripContainer';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';
import styles from './styles/global.scss';

class App extends React.Component {
  static propTypes = {
    trips: propTypes.array,
    setStates: propTypes.func,
  }

  constructor(props){
    super(props);
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={styles.switchWrapper}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/regions' component={Regions} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/country/:id' component={CountryContainer} />
            <Route exact path='/trip/:id' component={TripContainer} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import {connect} from 'react-redux';
import Trips from './Trips';
import {getFilteredTrips} from '../../../redux/tripsRedux';

const mapStateToProps = state => ({
  trips: getFilteredTrips(state),
  console: console.log('getFilteredTrip: ', getFilteredTrips(state)),
});

export default connect(mapStateToProps)(Trips);

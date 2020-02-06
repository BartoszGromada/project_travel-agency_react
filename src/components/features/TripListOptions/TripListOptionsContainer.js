import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, addTag, removeTag, addRegion, removeRegion} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDuration: ({type, value}) => dispatch(changeDuration({type, value})),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  addRegion: region => dispatch(addRegion(region)),
  removeRegion: region => dispatch(removeRegion(region)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

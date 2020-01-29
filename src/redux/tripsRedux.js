/* SELECTORS */

export const getAllTrips = ({trips}) => trips;
//console.log(getAllTrips);

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase) {
    console.log('filters.searchPhras: ',filters.searchPhras);
    const pattern = new RegExp(filters.searchPhrase, 'i');
    console.log('pattern: ',pattern);
    output = output.filter(trip => pattern.test(trip.name));
    console.log('output: ',output);
  }

  // TODO - filter by duration
  if(filters.duration) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // TODO - filter by tags
  if (filters.tags) {
    
    filters.tags.forEach(tag => {
      console.log('tag: ', tag);
      output = output.filter(trip => trip.tags.find(tripTag => tripTag === tag));
    });
  }

  // TODO - sort by cost descending (most expensive goes first)
  
  const compareFunction = (x, y) => {
    const replaceX = x.cost.replace('$','');
    const replaceY = y.cost.replace('$','');
    if (parseInt(replaceX) > parseInt(replaceY)) return -1;
    if (parseInt(replaceX) < parseInt(replaceY)) return 1;
    else return 0;
  };
  console.log('outputBefore: ', output);
  output = output.sort(compareFunction);
  console.log('outputAfter: ', output);

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  // TODO - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const GET_TRIPS = createActionName('GET_TRIPS');

// action creators
export const createActionGetTrips = payload => ({ payload: { ...payload }, type: GET_TRIPS });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_TRIPS:
      return [...state, action.payload];
    default:
      return state;
  }
}
//
// reducer
//export default function reducer(statePart = [], action = {}) {
//  switch (action.type) {
//    default:
//      return statePart;
//  }
//}
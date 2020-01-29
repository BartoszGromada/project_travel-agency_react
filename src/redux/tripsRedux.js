/* SELECTORS */

export const getAllTrips = ({trips}) => trips;
console.log(getAllTrips);

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;
  console.log(output);

  // filter by search phrase
  if(filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration) {
    output = trips.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // TODO - filter by tags
  if (filters.tags) {
    console.log('filters.tags: ', filters.tags);
    const pattern = new RegExp(filters.tags, 'i');
    console.log('pattern: ', pattern);
    output = output.filter(trip => pattern.test(trip.tags));
    console.log('output: ',output);
  }

  // TODO - sort by cost descending (most expensive goes first)

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
/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    console.log(filters, trips);
    const pattern = new RegExp(filters.duration, 'i');
    output = output.filter(trip => pattern.test(trip.days));
  }

  // TODO - filter by tags
  if(filters.tags){
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
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
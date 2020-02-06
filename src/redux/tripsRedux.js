export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters, countries}) => {
  let output = trips;

  if(filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  if(filters.duration) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  if (filters.tags) {
    filters.tags.forEach(tag => {
      output = output.filter(trip => trip.tags.find(tripTag => tripTag === tag));
    });
  }

  if (filters.regions) {
    filters.regions.forEach(region => {
      output = output.filter(trip => countries[trip.country.code].region === region);
    });
  }
  
  const compareFunction = (x, y) => {
    const replaceX = x.cost.replace('$','');
    const replaceY = y.cost.replace('$','');
    if (parseInt(replaceX) > parseInt(replaceY)) return -1;
    if (parseInt(replaceX) < parseInt(replaceY)) return 1;
    else return 0;
  };
  output = output.sort(compareFunction);

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  return filtered.length ? filtered : [{error: true}];
};

const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

export const GET_TRIPS = createActionName('GET_TRIPS');

export const createActionGetTrips = payload => ({ payload: { ...payload }, type: GET_TRIPS });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_TRIPS:
      return [...state, action.payload];
    default:
      return state;
  }
}
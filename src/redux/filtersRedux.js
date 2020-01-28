/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');
export const CHANGE_COST = createActionName('CHANGE_COST');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = payload => ({payload, type: CHANGE_DURATION});
export const changeTags = payload => ({payload, type: CHANGE_TAGS});
export const changeCost = payload => ({payload, type: CHANGE_COST});
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: parseInt(action.payload.value),
        },
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };
    case CHANGE_COST:
      return {
        ...statePart,
        cost: action.payload,
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}

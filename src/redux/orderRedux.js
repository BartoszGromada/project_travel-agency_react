export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_OPTION = createActionName('SET_OPTION');

export const setOrderOption = payload => ({ payload, type: SET_OPTION });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}

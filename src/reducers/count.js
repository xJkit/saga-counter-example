import * as ActionTypes from '../actions/ActionTypes';

const count = (state = 0, action) => {
    switch(action.type) {
      case ActionTypes.COUNT_CLICK:
        return state + action.payload;
      default:
        return state;
    }
};

export default count;

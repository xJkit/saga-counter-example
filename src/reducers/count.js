import { COUNT_CLICK } from '../actions/counter';

const count = (state = 0, action) => {
    switch(action.type) {
      case COUNT_CLICK:
        return state + action.payload.byNumber;
      default:
        return state;
    }
};

export default count;

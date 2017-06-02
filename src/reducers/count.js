import * as Types from '../actions/ActionTypes';

const count = (state = 0, action) => {
    switch(action.type) {
        case Types.INCREMENT_COUNT:
            return state + 1;
        case Types.DECREMENT_COUNT:
            return state - 1;
        default:
            return state;
    }
}

export default count;
import * as Types from '../actions/ActionTypes';

const count = (state = 0, action) => {
    switch(action.type) {
        case Types.INCREMENT_COUNT:
        case Types.INCREMENT_COUNT_ASYNC:
            return state + 1;
        case Types.DECREMENT_COUNT:
        case Types.DECREMENT_COUNT_ASYNC:
            return state - 1;
        default:
            return state;
    }
}

export default count;
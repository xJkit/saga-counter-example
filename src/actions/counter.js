import * as Types from './ActionTypes';

export const increment = () => ({
    type: Types.INCREMENT_COUNT,
});

export const decrement = () => ({
    type: Types.DECREMENT_COUNT,
});

export const incrementAsync = ({ delay = 1000 }) => ({
    type: Types.INCREMENT_COUNT_ASYNC,
    delay,
});

export const decrementAsync = ({ delay = 1000 }) => ({
    type: Types.DECREMENT_COUNT_ASYNC,
    delay,
});
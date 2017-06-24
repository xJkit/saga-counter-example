import { createRequestTypes } from './utils';
import { createAction } from 'redux-actions';

//--- Sync Action Types ---
export const COUNT_CLICK = 'COUNT_CLICK';

//--- Async Action Types ---
export const ASYNC_COUNT_CLICK = createRequestTypes('ASYNC_COUNT_CLICK');

//--- Action Creators ---
export const countClick = createAction(COUNT_CLICK);
export const asyncCountClick = createAction(ASYNC_COUNT_CLICK.REQUEST);

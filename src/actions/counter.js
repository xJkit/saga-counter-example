import { createRequestTypes } from './utils';
import { createAction } from 'redux-actions';

import * as ActionTypes from './ActionTypes';

//--- Action Creators ---
export const countClick = createAction(ActionTypes.COUNT_CLICK);

export const takeEveryCountClick = createAction(ActionTypes.TAKE_EVERY_COUNT_CLICK);

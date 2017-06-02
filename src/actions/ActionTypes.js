const requestTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];
const createRequestTypeByAction = actionType => requestTypes.reduce((accu, type) => {
  accu[type] = `${actionType}_${type}`;
  return accu;
}, {});


export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const INCREMENT_COUNT_ASYNC = 'INCREMENT_COUNT_ASYNC';
export const DECREMENT_COUNT_ASYNC = 'DECREMENT_COUNT_ASYNC';

// async actions
export const GET_USERS = createRequestTypeByAction('GET_USERS');
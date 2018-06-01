const requestTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];
const createRequestTypeByAction = actionType => requestTypes.reduce((accu, type) => {
  accu[type] = `${actionType}_${type}`;
  return accu;
}, {});


export const COUNT_CLICK = 'COUNT_CLICK';
export const TAKE_EVERY_COUNT_CLICK = 'TAKE_EVERY_COUNT_CLICK';

// async actions
export const GET_USERS = createRequestTypeByAction('GET_USERS');

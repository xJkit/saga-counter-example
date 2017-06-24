const requestTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];
const createRequestTypeByAction = actionType => requestTypes.reduce((accu, type) => {
  accu[type] = `${actionType}_${type}`;
  return accu;
}, {});


export const COUNT_CLICK = 'COUNT_CLICK';
export const COUNT_ASYNC_COUNT = 'COUNT_ASYNC_COUNT';

// async actions
export const GET_USERS = createRequestTypeByAction('GET_USERS');

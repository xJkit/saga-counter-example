const requestTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];
export const createRequestTypes = actionType => requestTypes.reduce((accu, type) => {
  accu[type] = `${actionType}_${type}`;
  return accu;
}, {});

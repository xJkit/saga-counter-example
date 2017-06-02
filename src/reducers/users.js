import * as Types from '../actions/ActionTypes';

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_USERS.SUCCESS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}

export default usersReducer;
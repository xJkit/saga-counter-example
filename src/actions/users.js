// Online fake RESTful api from JSONPlaceholder
import * as Types from './ActionTypes';

const API_ROOT = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => ({
  type: Types.GET_USERS.REQUEST,
  endpoint: API_ROOT,
});

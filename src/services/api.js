const API_ROOT = 'https://jsonplaceholder.typicode.com';

const callApi = ({
  apiRoot,
  endpoint,
  method = 'GET',
  body = {},
}) => {
  const url = apiRoot
    ? `${apiRoot}${endpoint}`
    : `${API_ROOT}%{endpoint}`;

  switch(method) {
    case 'GET': {
      return fetch(url)
        .then(
          response => response.json().then(json => ({ json, response }) )
        )
        .then( ({ json, response }) => {
          if (!response.ok) return new Promise.reject(json);
          return json;
        })
    }
  }
};
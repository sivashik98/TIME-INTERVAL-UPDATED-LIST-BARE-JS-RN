import { config } from '../../config';

export const fetchHelper = (path, options) => async () => {
  return fetch(`${config.apiUrl}${path}`, options).then(response =>
    response.json(),
  );
};

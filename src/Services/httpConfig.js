import { baseUrl } from "../Constants";

const getHttpRequest = (url) => {
  return fetch(`${baseUrl}${url}`).then((res) => res.json());
};

export { getHttpRequest };

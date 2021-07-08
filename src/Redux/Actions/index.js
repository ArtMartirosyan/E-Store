export const ADD_USER = (regData) => {
  return {
    type: "ADD_USER",
    payload: regData,
  };
};
export const SIGN_IN = (loginData) => {
  return {
    type: "SIGN_IN",
    payload: loginData,
  };
};
export const SIGN_OUT = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const ADD_TO_BASKET = (id) => {
  return {
    type: "ADD_TO_BASKET",
    payload: id,
  };
};

export const REMOVE_FROM_BASKET = (id) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: id,
  };
};

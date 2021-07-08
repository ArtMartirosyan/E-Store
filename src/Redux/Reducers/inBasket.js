const inBasketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case "REMOVE_FROM_BASKET":
      return state.filter((id) => {
        return id !== action.payload;
      });
    default:
      return state;
  }
};

export default inBasketReducer;

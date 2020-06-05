const initialState = {
  products: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const indexOfProduct = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (indexOfProduct === -1) {
        return {
          ...state,
          products: [...state.products, { id: action.payload, amount: 1 }],
        };
      } else {
        const newArray = [...state.products];
        newArray[indexOfProduct] = {
          ...newArray[indexOfProduct],
          amount: newArray[indexOfProduct].amount + 1,
        };
        return {
          ...state,
          products: newArray,
        };
      }
    }
    case 'REMOVE_FROM_CART': {
      const indexOfProduct = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (indexOfProduct !== -1) {
        const newArray = [...state.products];
        newArray[indexOfProduct] = {
          ...newArray[indexOfProduct],
          amount:
            newArray[indexOfProduct].amount > 0
              ? newArray[indexOfProduct].amount - 1
              : 0,
        };
        return {
          ...state,
          products: newArray,
        };
      }
    }
    default:
      return state;
  }
}

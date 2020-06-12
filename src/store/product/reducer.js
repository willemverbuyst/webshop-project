const initialState = {
  all: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
   
    case "homePage/productsFetched": {
      return {
        all: [...state.all, ...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}

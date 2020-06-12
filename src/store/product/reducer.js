const initialState = {
  all: [],
};

export default function productReducer(state = initialState, action) {
  console.log("This is the action", action);
  switch (action.type) {
    case "foo":
      console.log("WORK.. plz");
      return initialState;

    case "homePage/productsFetched":
      return {
        all: [...state.all, ...action.payload.products],
      };

    default:
      return state;
  }
}

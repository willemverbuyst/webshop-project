export const selectProducts = (state) => {
  console.log("this is state", state)
  return state.products.all;
};

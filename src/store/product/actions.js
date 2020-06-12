import axios from "axios";
const API_URL = "https://webshop-server.herokuapp.com";

export function productsFetched(Products) {
  console.log("this is products", Products);
  return {
    type: "homePage/productsFetched",
    payload: Products,
  };
}

export function resetState() {
  console.log("THIS IS A CONSOLE LOG");
  return {
    type: "foo"
  };
}

export async function fetchAllProducts(dispatch, getState) {
  const response = await axios.get(`${API_URL}/products`);

  const Products = response.data;
  //  console.log("this is the response", response)
  dispatch(productsFetched(Products));
}

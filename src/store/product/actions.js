import axios from "axios";
const API_URL = " "

export function productsFetched(Products) {
    return {
      type: "homePage/productsFetched",
      payload: Products
    };
  }

export async function fetchAllProducts(dispatch, getState) {
  
    const response = await axios.get(`${API_URL}/products`)
  
    const Products = response.data;
  
    dispatch(productsFetched(Products));
  }

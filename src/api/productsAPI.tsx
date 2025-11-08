import axios from "axios";

const API = "http://localhost:3000/api/products";

export const getProducts = async (params = {}) => {
  const res = await axios.get(API, { params });
  return res.data;
};

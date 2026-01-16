import axios from "axios";
const url = process.env.STRAPI_URL + "/api";
const api_token = process.env.STRAPI_TOKEN;

export const clientAxios = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${api_token}`,
    "Content-Type": "application/json",
  },
});

export const getStrapi = async (link) => {
  try {
    const res = await clientAxios.get(`${link}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderStrapi = async () => {
  try {
    const res = await clientAxios.get(`/orders?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const postToStrapi = async (item) => {
  try {
    const res = await clientAxios.post(`/orders`, item);
    return res.data.data;
  } catch (error) {
    console.error("❌ Request failed:", error.response?.data || error.message);
    console.error("🔍 Full error:", error);
  }
};

import axios from "axios";
const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/api";
const api_token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

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

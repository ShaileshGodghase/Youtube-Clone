import axios from "axios";

interface ParamsType {
  q?: string;
  maxResults?: number;
  part?: string;
  regionCode?: string;
  order?: string;
}

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const CreateApiEndpoint = (url: string, params?: ParamsType) => {
  const options = {
    params: {
      ...params,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  return () => {
    return axios.get(`${BASE_URL}/${url}`, options);
  };
};

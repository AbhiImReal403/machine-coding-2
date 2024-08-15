import axios from "axios";
import envConfig from "../../utils/env.config";

const baseURL = envConfig.baseURL;

const useAxios = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default useAxios;

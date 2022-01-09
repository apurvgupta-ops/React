import axios from "axios";
const client = axios.create({ baseUrl: "http://localhost:4000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (success) => success;
  const onError = (error) => {
    //Optionally catch error and add additionally logging here
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};

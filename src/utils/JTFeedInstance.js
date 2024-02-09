import axios from "axios";
import { FEED_URl } from "../integrations/JTAPIs";
import { getAuthTokenDetails } from "./LocalStorage";

const JTFeedInstance= axios.create({
    baseURL: FEED_URl,
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    },
});
JTFeedInstance.interceptors.request.use(async function (config) {
  let token = await getAuthTokenDetails();
  // console.log('Sending req with this token', token);
  config.headers.Authorization = token;
  return config;
});

export default JTFeedInstance;
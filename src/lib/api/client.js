import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://3.36.18.249:9553";

export default client;

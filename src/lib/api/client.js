import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://34.47.80.77:9553';

export default client;

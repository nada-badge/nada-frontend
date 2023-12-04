import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://34.64.169.221:9553';

export default client;

import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://34.64.104.214:3000';

export default client;

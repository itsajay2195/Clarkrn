import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API's base URL
  timeout: 10000, // Adjust the timeout as needed
});

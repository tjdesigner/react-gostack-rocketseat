import axios from 'axios';

const provider = axios.create({
  baseURL:'https://api.github.com'
})

export default provider;

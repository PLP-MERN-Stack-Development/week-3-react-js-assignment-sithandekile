import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

api.fetchPosts = async () => {
  try {
    const response = await api.get('/posts?limit=3');
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;

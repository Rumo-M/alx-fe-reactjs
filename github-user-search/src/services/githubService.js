// src/services/githubService.js
import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q';
const userDataUrl = 'https://api.github.com/users/';

const githubService = {
  searchUsers: async (query) => {
    try {
      const response = await axios.get(`${apiUrl}=${query}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`${userDataUrl}${username}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default githubService;



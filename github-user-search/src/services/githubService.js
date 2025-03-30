// src/services/githubService.js
import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q';

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
};

export default githubService;

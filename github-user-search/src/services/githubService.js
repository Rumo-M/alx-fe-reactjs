// src/services/githubService.js
import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q=';

const githubService = {
  searchUsers: async (query, location, minRepos) => {
    try {
      const queryParams = `${query}+location:${location}+repos:>${minRepos}`;
      const response = await axios.get(`${apiUrl}${queryParams}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default githubService;

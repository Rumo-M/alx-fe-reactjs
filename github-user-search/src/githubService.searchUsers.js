import axios from 'axios';

const githubService = {
  // Search for GitHub users based on the provided parameters
  searchUsers: async (username, location = '', minRepos = '') => {
    try {
      const response = await axios.get('https://api.github.com/search/users', {
        params: {
          q: username,
          location: location,
          repos: minRepos,
        },
      });
      
      // Ensure the response is in the correct format
      console.log(response.data);  // Check the structure of the response
      return response.data;  // Return the response data (e.g., { items: [] })
    } catch (error) {
      console.error('Error in searchUsers:', error);
      throw new Error('Failed to fetch data from GitHub API');
    }
  },

  // Fetch detailed information about a specific user
  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error in fetchUserData:', error);
      throw new Error('Failed to fetch user data');
    }
  }
};

export default githubService;

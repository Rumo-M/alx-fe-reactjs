import axios from 'axios';

// Function to fetch user data from GitHub API using username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found or API request failed');
  }
};

// Function to search users based on query, location, and minimum repositories
export const searchUsers = async (query, location = "", minRepos = 0) => {
  try {
    // Construct the search query string based on parameters
    let searchQuery = `q=${query}`;

    // Add location filter if provided
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // Add minimum repository filter if provided
    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // Full search URL
    const searchUrl = `https://api.github.com/search/users?${searchQuery}`;

    // Make the API request to the GitHub search users endpoint
    const response = await axios.get(searchUrl);
    return response.data.items; // Return the list of users matching the criteria
  } catch (error) {
    throw new Error('Error searching users');
  }
};

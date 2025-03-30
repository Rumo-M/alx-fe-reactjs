import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found or API request failed');
  }
};

// Function to search users based on criteria like location and minimum repos
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

    // Make the API request to GitHub search users endpoint
    const response = await axios.get(`https

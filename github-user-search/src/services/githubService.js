import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data if successful
  } catch (error) {
    // Throw error if the user is not found or other errors occur
    throw new Error('Error fetching user data');
  }
};

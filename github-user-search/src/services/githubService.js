import axios from 'axios';

export const fetchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  if (!query) throw new Error('No search parameters provided');

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};

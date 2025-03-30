import axios from "axios";

// Base GitHub API search URL for users
const GITHUB_API_URL = "https://api.github.com/search/users?q=";

const fetchUserData = async (query, location = "", minRepos = 0) => {
  try {
    // Constructing the query with location and minimum repos filters
    let searchQuery = query;

    // If location is provided, add it to the query
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // If minRepos is provided, add it to the query (we use the number of repositories)
    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // Construct the API request URL with the dynamically built query
    const response = await axios.get(`${GITHUB_API_URL}${searchQuery}`);

    return response.data; // Returns the API response data containing users
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchUserData;

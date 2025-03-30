import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data; // Returns an object with 'items' array
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchUserData;

import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure this function is correctly implemented in githubService.js

const Search = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [users, setUsers] = useState([]); // State to store an array of user data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(""); // State to manage error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true
    setError(""); // Reset error state before each search
    setUsers([]); // Reset users state before new search

    try {
      // Fetch user data using the provided query
      const data = await fetchUserData(query);

      if (data) {
        setUsers([data]); // Set the users state with the fetched data (array format)
      } else {
        setError("Looks like we can't find the user."); // Show error if user is not found
      }
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error message if API request fails
    } finally {
      setLoading(false); // Set loading to false once the process is done
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update state with input value
          placeholder="Enter GitHub username"
          className="input"
        />
        <button type="submit" className="btn-search">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading text while waiting for data */}
      {error && <p>{error}</p>} {/* Show error message if user is not found */}

      {/* Map over users array and display each user's data */}
      {users.length > 0 && !loading && !error && users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h2>{user.name || user.login}</h2>
          <p>Location: {user.location || "N/A"}</p>
          <p>Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default Search;


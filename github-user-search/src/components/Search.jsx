import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure this function is correctly implemented in githubService.js

const Search = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [user, setUser] = useState(null); // State to store the user data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(""); // State to manage error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true
    setError(""); // Reset error state before each search
    setUser(null); // Reset user state before new search

    try {
      // Fetch user data using the provided query
      const data = await fetchUserData(query);

      if (data) {
        setUser(data); // Set user data if found
      } else {
        setError("Looks like we can't find the user."); // Show error if no user data is found
      }
    } catch (err) {
      setError("An error occurred while fetching the data."); // Handle errors during the fetch request
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  };

  return (
    <div className="search-container">
      {/* Form for user input */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Capture user input in query state
          className="input"
          placeholder="Search for GitHub user"
        />
        <button type="submit" className="btn-search">Search</button>
      </form>

      {/* Show loading message */}
      {loading && <p>Loading...</p>}

      {/* Show error message if no user is found or if there's an error */}
      {error && <p>{error}</p>}

      {/* Display user data if found */}
      {user && !loading && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h3>{user.login}</h3>
          <p>Location: {user.location || "N/A"}</p>
          <p>Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;


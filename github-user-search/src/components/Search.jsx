import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Make sure this function is correctly implemented in githubService.js

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
      console.log("Fetching data for user:", query);  // Check if the query is correct

      // Fetch user data using the provided query
      const data = await fetchUserData(query);

      console.log("Fetched user data:", data);  // Check what data is returned

      if (data) {
        setUser(data); // Set the user state with the fetched data
      } else {
        setError("Looks like we can't find the user.");  // Display error message if no user found
      }
    } catch (err) {
      console.error("Error fetching user data:", err);  // Log the error
      setError("Looks like we can't find the user.");  // Set error message on failure
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
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
          placeholder="Enter GitHub username"
          className="input"
        />
        <button type="submit" className="btn-search">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message if any */}

      {user && !loading && !error && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h2>{user.name || user.login}</h2>
          <p>Location: {user.location || "N/A"}</p>
          <p>Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

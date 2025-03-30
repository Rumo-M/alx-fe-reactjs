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
      console.log("Fetching data for user:", query);  // Log the search query

      // Fetch user data using the provided query
      const data = await fetchUserData(query);

      console.log("Fetched user data:", data);  // Log the fetched data

      if (data) {
        setUser(data); // Set the user state with the fetched data
      } else {
        setError("Looks like we can't find the user.");  // Show error if user is not found
      }
    } catch (err) {
      console.error("Error fetching user data:", err);  // Log the error
      setError("Looks like we can't find the user.");  // Set error message if API request fails
    } finally {
      setLoading(false); // Set loading to false once the process is done
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the form */}
        <input
          type="text"
          value={query} // Value bound to state
          onChange={(e) => setQuery(e.target.value)} // Update state with input value
          placeholder="Enter GitHub username"
          className="input"
        />
        <button type="submit" className="btn-search">Search</button> {/* Submit button */}
      </form>

      {loading && <p>Loading...</p>} {/* Show loading text while waiting for data */}
      {error && <p>{error}</p>} {/* Show error message if user is not found */}

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


import React, { useState } from "react";
import { searchUsers } from "../services/githubService"; // Import the search function

const Search = () => {
  const [query, setQuery] = useState(""); // Search query state
  const [location, setLocation] = useState(""); // Location state
  const [minRepos, setMinRepos] = useState(0); // Minimum repos state
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // Call the search function with the query, location, and minRepos
      const data = await searchUsers(query, location, minRepos);
      if (data.length > 0) {
        setUsers(data);
      } else {
        setError("No users found.");
      }
    } catch (err) {
      setError("An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
          className="input"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="input"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repos (optional)"
          className="input"
        />
        <button type="submit" className="btn-search">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && !loading && !error && (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
              <h2>{user.login}</h2>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

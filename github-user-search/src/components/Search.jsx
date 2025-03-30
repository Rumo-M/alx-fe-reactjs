import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
  const [username, setUsername] = useState(''); // State to hold the input value
  const [userData, setUserData] = useState(null); // State to hold user data from API
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Clear previous error
    setUserData(null); // Clear previous data

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Update user data state
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          className="input"
        />
        <button type="submit" className="btn-search">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

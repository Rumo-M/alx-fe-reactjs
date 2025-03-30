import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
  const [username, setUsername] = useState(''); // State to hold the input value
  const [userData, setUserData] = useState(null); // State to hold user data from API
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setLoading(true); // Set loading to true
    setError(null); // Clear any previous error
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data using the provided username
      setUserData(data); // Update the userData state with the response
    } catch (err) {
      setError("Looks like we can't find the user"); // Show error if user not found
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Capture the value from input field
          className="input"
        />
        <button type="submit" className="btn-search">Search</button> {/* Button to trigger form submit */}
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message while data is fetching */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error message if user not found */}
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" /> {/* Display avatar image */}
          <h2>{userData.name || userData.login}</h2> {/* Display name or login if name is not available */}
          <p>{userData.bio || "No bio available"}</p> {/* Display bio or fallback text */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

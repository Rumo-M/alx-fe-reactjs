import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for GitHub User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p className="error-text">{error}</p>}

      {userData && (
        <div className="user-details">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

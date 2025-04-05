import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Error message state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');  // Reset error message before every search

    try {
      const data = await githubService.searchUsers(username, location, minRepos);
      console.log("Search API data:", data); // Log the result of the API call

      if (data.items && data.items.length > 0) {
        setUsers(data.items);  // If users are found, display them
      } else {
        setError("Looks like we can't find the user");  // Display error message if no users found
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("Something went wrong. Please try again.");  // Display generic error message on failure
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (username) => {
    setLoading(true);
    setError('');
    try {
      const userData = await githubService.fetchUserData(username);
      setSelectedUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Could not fetch user data.");  // Handle error if fetching user details fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub user"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
        />
        <button type="submit">Search</button>
      </form>

      {/* Show loading message */}
      {loading && <p>Loading...</p>}

      {/* Show error message if something went wrong or no users found */}
      {error && !loading && <p>{error}</p>}  {/* Display the error message */}

      {/* Render the user list if there are users */}
      {users.length > 0 && !loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleUserClick(user.login)}
                >
                  {user.login}
                </a>
              </h2>
              <p>{user.location}</p>
              <img src={user.avatar_url} alt={user.login} />
            </li>
          ))}
        </ul>
      )}

      {/* Show selected user information */}
      {selectedUser && !loading && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.bio}</p>
          <img src={selectedUser.avatar_url} alt={selectedUser.login} />
        </div>
      )}
    </div>
  );
};

export default Search;

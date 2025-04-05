import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Handle form submission and API search
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Reset previous error messages

    try {
      const data = await githubService.searchUsers(username, location, minRepos);
      
      if (!data.items || data.items.length === 0) {
        setError("Looks like we can't find the user"); // Set the error message if no users are found
      } else {
        setUsers(data.items); // Set the users if data is found
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle user click for additional user details
  const handleUserClick = async (username) => {
    setLoading(true);
    setError('');
    try {
      const userData = await githubService.fetchUserData(username);
      setSelectedUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Could not fetch user data.");
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

      {/* Show loading message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Show error message if something went wrong or no users found */}
      {error && !loading && <p>{error}</p>}  {/* This line ensures the message "Looks like we can't find the user" will display */}

      {/* Render user list if available */}
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

      {/* Display selected user information */}
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

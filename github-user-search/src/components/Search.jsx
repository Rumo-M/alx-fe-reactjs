import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Error state for handling error messages

  // handleSubmit function to handle form submission and fetch users
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setError('');  // Reset error message before new search

    try {
      // Call the githubService.searchUsers API function
      const data = await githubService.searchUsers(username, location, minRepos);
      console.log("GitHub API response:", data);  // Log the response for debugging

      // If users are found, set the users state
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        // If no users are found, show the error message
        setError("Looks like we can't find the user");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again."); // Display generic error message
    } finally {
      setLoading(false); // Stop loading after API call is completed
    }
  };

  const handleUserClick = async (username) => {
    setLoading(true);
    setError(''); // Reset error before fetching selected user

    try {
      const userData = await githubService.fetchUserData(username);
      setSelectedUser(userData); // Set the selected user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Could not fetch user data."); // Display error if fetching user data fails
    } finally {
      setLoading(false); // Stop loading after fetching user data
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

      {/* Show loading message while fetching data */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there's an issue or no users found */}
      {error && !loading && <p>{error}</p>}

      {/* Render users list if there are users */}
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

      {/* Display selected user details */}
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

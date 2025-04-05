import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Reset error message before fetching

    try {
      // Log the search parameters to the console for debugging
      console.log("Searching for users with:", { username, location, minRepos });

      // Call GitHub API to search for users
      const data = await githubService.searchUsers(username, location, minRepos);
      console.log("API Response:", data); // Log the API response to inspect it

      // Check if users were returned
      if (data.items && data.items.length > 0) {
        setUsers(data.items); // Set the users state if there are users
      } else {
        setError("Looks like we can't find the user"); // No users found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again later."); // Handle any API errors
    } finally {
      setLoading(false); // Stop loading once the request is complete
    }
  };

  // Handle user click to fetch more details about the selected user
  const handleUserClick = async (username) => {
    setLoading(true);
    setError(''); // Reset error before fetching user data

    try {
      const userData = await githubService.fetchUserData(username); // Fetch user data
      setSelectedUser(userData); // Set the selected user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Could not fetch user data.");
    } finally {
      setLoading(false); // Stop loading after fetching user data
    }
  };

  return (
    <div>
      {/* Search form */}
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

      {/* Loading message */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && !loading && <p>{error}</p>}

      {/* Display list of users if found */}
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

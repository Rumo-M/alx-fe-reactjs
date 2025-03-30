// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await githubService.searchUsers(username, location, minRepos);
      setUsers(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserClick = async (username) => {
    try {
      const userData = await githubService.fetchUserData(username);
      setSelectedUser(userData);
    } catch (error) {
      console.error(error);
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
      {users.length > 0 && (
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
      {selectedUser && (
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


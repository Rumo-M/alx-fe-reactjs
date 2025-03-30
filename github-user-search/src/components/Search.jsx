// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await githubService.searchUsers(username, location, minRepos);
      setUsers(data.items);
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
              <h2>{user.login}</h2>
              <p>{user.location}</p>
              <img src={user.avatar_url} alt={user.login} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
      setError(null);
    } catch (error) {
      setError('Looks like we can\'t find the user');
      setUserData(null);
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
        <button type="submit">Search</button>
      </form>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.login} />
        </div>
      ) : (
        error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>Enter a username to search</p>
        )
      )}
    </div>
  );
};

export default Search;

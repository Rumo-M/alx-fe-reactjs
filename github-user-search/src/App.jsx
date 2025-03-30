// src/App.js
import React, { useState } from 'react';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      
      {error && <p className="text-red-500">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;

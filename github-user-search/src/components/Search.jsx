import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Updated import for the new fetchUserData function

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(""); // New state for location
  const [minRepos, setMinRepos] = useState(0); // New state for minimum repositories
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]); // Reset users before fetching

    try {
      const data = await fetchUserData(query, location, minRepos); // Pass location and minRepos
      if (data && data.items && data.items.length > 0) {
        setUsers(data.items); // Set the users data
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 text-center">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-5">
        <input
          type="text"
          placeholder="Search GitHub Users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-4/5 border border-gray-300 rounded"
        />
        
        {/* Location Input */}
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 w-4/5 border border-gray-300 rounded mt-2"
        />

        {/* Minimum Repositories Input */}
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(Number(e.target.value))}
          className="p-2 w-4/5 border border-gray-300 rounded mt-2"
        />

        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-2"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Users List */}
      {users.length > 0 && (
        <div className="mt-5 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border border-gray-300 rounded-lg bg-gray-100 flex items-center space-x-4"
            >
              <img
                className="rounded-full w-16 h-16"
                src={user.avatar_url}
                alt={user.login}
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

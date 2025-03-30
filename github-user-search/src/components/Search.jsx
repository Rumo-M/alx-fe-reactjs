import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // ✅ Correct import

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(query);
      if (data) {
        setUser(data);
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
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Info */}
      {user && (
        <div className="mt-5 p-4 border border-gray-300 rounded-lg bg-gray-100">
          <img
            className="rounded-full w-20 h-20 mx-auto"
            src={user.avatar_url}
            alt={user.login}
          />
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
      )}
    </div>
  );
};

export default Search;

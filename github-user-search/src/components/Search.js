import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
  const [username, setUsername] = useState(''); // State to hold the input value
  const [userData, setUserData] = useState(null); // State to hold user data from API
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Clear previous error
    setUserData(null); // Clear previous data

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Update user data state
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub

import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Make sure this function is correctly implemented in githubService.js

const Search = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [user, setUser] = useState(null); // State to store the user data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(""); // State to manage error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true
    setError(""); // Reset error state before each search
    setUser(null); // Reset user state before new search

    try {
      // Fetch user data using the provided query
      const data = await fetchUserData(query);

      if (

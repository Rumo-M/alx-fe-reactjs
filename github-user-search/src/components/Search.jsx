import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Assuming this function exists in githubService.js

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

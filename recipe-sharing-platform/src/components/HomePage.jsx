import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the GitHub User Search</h1>
      <p>Find your favorite GitHub users!</p>
      <Link to="/search" className="btn-search">Go to Search</Link> {/* Link to the Search page */}
    </div>
  );
};

export default HomePage;

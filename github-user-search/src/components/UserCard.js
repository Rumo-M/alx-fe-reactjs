// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <div className="mt-2 text-sm">
        <p><strong>Followers:</strong> {user.followers}</p>
        <p><strong>Following:</strong> {user.following}</p>
      </div>
    </div>
  );
};

export default UserCard;

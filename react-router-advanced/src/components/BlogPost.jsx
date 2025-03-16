// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // Extract the 'id' from the URL parameter

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the blog post with ID: {id}</p>
      {/* You can fetch the blog post data using the 'id' */}
    </div>
  );
};

export default BlogPost;
// src/pages/single/Single.jsx
import React from 'react';
import { useParams } from 'react-router-dom'
 // Adjust the path as necessary
import BlogData from '../JSON/BlogData';
 import SinglePost from '../components/singlePost/SinglePost';

export default function Single() {
  const postData = BlogData;
  const { id } = useParams();
  console.log("Single component rendered with id:", id);
  
  const post = postData.find(post => post.id === id);
  console.log("Post data found:", post);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="single">
      <SinglePost post={post} />
    </div>
  );
}

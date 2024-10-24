import React, { useState } from "react";
import { firestore, auth } from "../firebase";
import './Post.css'; // Optional: For post-specific styles

const Post = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      firestore.collection("posts").add({
        content: content,
        author: user.email,
        createdAt: new Date(),
      })
      .then(() => {
        setSuccess("Post created successfully!");
        setContent("");
      })
      .catch((err) => {
        setError("Failed to create post.");
        console.error("Post Error:", err);
      });
    } else {
      setError("You must be logged in to create a post.");
    }
  };

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      <form onSubmit={handlePost}>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Post;

import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import Post from './Post.jsx';

export default function FetchOnClick() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    const data = await getSinglePost(1);
    setPost(data);
    setIsLoading(false);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Post title={post.title} body={post.body} />
        )}
      </div>
    </div>
  );
}

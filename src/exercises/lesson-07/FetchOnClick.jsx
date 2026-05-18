import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import Post from './Post.jsx';

export default function FetchOnClick() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  async function handleClick() {
    setIsLoading(true);
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      console.error(`error: ${error}`);
      setErrMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (errMsg !== '') {
    return (
      <div className="root">
        <p className="error">{errMsg}</p>
      </div>
    );
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

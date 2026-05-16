import { useEffect, useState } from 'react';

import { getPosts } from './api.js';
import './Lesson07Styles.css';
import Post from './Post.jsx';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    let isUnmounted = false;

    (async () => {
      try {
        setIsLoading(true);
        const data = await getPosts(5);
        if (!isUnmounted) {
          setPosts(data);
        }
      } catch (error) {
        console.error(`error: ${error}`);
        setErrMsg(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      isUnmounted = true;
    };
  }, []);

  if (errMsg !== '') {
    console.log(`errMsg set: ${errMsg}`);
    return (
      <div className="root">
        <p>{errMsg}</p>
      </div>
    );
  }

  console.log('non error render');
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && errMsg === '' ? (
          <p>Loading...</p>
        ) : (
          posts?.map((post) => {
            return <Post key={post.id} title={post.title} body={post.body} />;
          })
        )}
      </div>
    </div>
  );
}

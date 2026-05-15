import { useEffect, useState } from 'react';

import { getPosts } from './api.js';
import './Lesson07Styles.css';

function Post({ title, body }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
}

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isUnmounted = false;

    (async () => {
      try {
        const data = await getPosts();
        if (!isUnmounted) {
          console.log(data);
          setPosts(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      isUnmounted = true;
    };
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    </div>
  );
}

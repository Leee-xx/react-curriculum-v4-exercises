import { useEffect } from 'react';

import { getPosts } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  useEffect(() => {
    (async () => {
      try {
        const resp = await getPosts();
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        TODO: Replace me with fetched data when the component renders
      </div>
    </div>
  );
}

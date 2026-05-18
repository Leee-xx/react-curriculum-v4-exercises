const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Instructions:
 * The `POSTS_ENDPOINT` url returns a list of post objects
 * from the JSONPlaceholder API.
 * Your task is to finish implementing the two functions in this file
 * so that they fetch data from the API and return the results as JSON.
 * Then, you will use that data in `<FetchOnRender>` and `<FetchOnClick>`.
 *
 * TIP: A request to `https://jsonplaceholder.typicode.com/posts/`
 * returns an array of posts.
 * A request to `https://jsonplaceholder.typicode.com/posts/1`
 * returns a single post object with an `id` of 1.
 * Try pasting those URLs into your browser to see the results!
 */

/**
 * Should return an array of posts with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export async function getPosts(limit) {
  console.log('[getPosts]: fetching list of posts');

  let url = POSTS_ENDPOINT;
  if (limit) {
    url += `?_limit=${limit}`;
  }
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(resp.status);
  }
  const data = await resp.json();
  return data;
}

/**
 * Should return a single post object with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  // TODO: use this `url` const to fetch the single post
  // and return some JSON data.
  // You may delete this comment once you've finished the implementation.

  const url = `${POSTS_ENDPOINT}${postId}`;
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(resp.status);
    }

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

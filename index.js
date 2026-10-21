const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function displayPosts(posts) {
  const postList = document.querySelector('#post-list');
  postList.innerHTML = '';

  posts.forEach((post) => {
    const listItem = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;

    listItem.append(title, body);
    postList.append(listItem);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch(POSTS_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Unable to load posts:', error);
    document.querySelector('#post-list').textContent = 'Unable to load posts. Please try again later.';
  }
}

fetchPosts();

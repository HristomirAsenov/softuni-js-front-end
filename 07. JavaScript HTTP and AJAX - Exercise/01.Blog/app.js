function attachEvents() {
  let allPosts = [];

  const BASE_URL = "http://localhost:3030/jsonstore/blog";
  const POSTS_URL = `${BASE_URL}/posts`;
  const COMMENTS_URL = `${BASE_URL}/comments`;

  const loadPostsElement = document.getElementById("btnLoadPosts");
  const selectElement = document.getElementById("posts");
  const viewPostCommentElement = document.getElementById("btnViewPost");
  const postBodyElement = document.getElementById("post-body");
  const postTitleElement = document.getElementById("post-title");
  const postCommentsElement = document.getElementById("post-comments");

  async function customFetch(url) {
    return fetch(url).then((res) => res.json());
  }

  function appendPosts(postsResponse) {
    selectElement.textContent = "";
    allPosts = [];

    Object.values(postsResponse).forEach(({ body, id, title }) => {
      const optionElement = document.createElement("option");

      optionElement.textContent = title;
      optionElement.value = id;
      selectElement.appendChild(optionElement);

      allPosts.push({ body, id, title });
    });
  }

  function fetchAllPosts() {
    customFetch(POSTS_URL).then(appendPosts);
  }

  function fetchSinglePost() {
    // const selectedPostId = selectElement.value
    const { value: selectedPostId } =
      selectElement;

    if (!selectedPostId) {
      return;
    }

    const selectedPost = allPosts.find((x) => x.id === selectedPostId);

    postBodyElement.textContent = selectedPost.body;
    postTitleElement.textContent = selectedPost.title

    customFetch(COMMENTS_URL).then((commentsResponse) => {
      postCommentsElement.textContent = "";

      Object.values(commentsResponse)
        .filter(({ postId }) => postId === selectedPostId)
        .forEach(({ id, text }) => {
          const li = document.createElement("li");
          li.textContent = text;
          li.setAttribute("data-id", id);

          postCommentsElement.appendChild(li);
        });
    });
  }

  loadPostsElement.addEventListener("click", fetchAllPosts);
  viewPostCommentElement.addEventListener("click", fetchSinglePost);
}

attachEvents();

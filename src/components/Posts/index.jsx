import { useEffect, useState } from "react";
import ManagePost from "../ManagePost/index.jsx";
import { Post } from "./components/Post/index.jsx";
import "./style.css";
import DetailPost from "../DetailPost/index.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postForDetailView, setPostForDetailView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addNewPost = (post) => {
    setPosts([...posts, post]);
  };

  const editPost = (post) => {
    const editedPosts = posts.map((oldPost) => {
      if (oldPost.id === post.id) {
        return post;
      }
      return oldPost;
    });

    setPosts(editedPosts);
  };

  const selectPost = (post) => {
    setSelectedPost(post);
    setPostForDetailView(null);
  };

  const showDetailPost = (postId) => {
    setSelectedPost(null);
    setPostForDetailView(postId);
  };

  const deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(posts.filter((item) => item.id !== postId));
    });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [currentPage]);

  return (
    <div>
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            selectPost={selectPost}
            showDetailPost={showDetailPost}
          />
        ))}
      </div>
      <h2>Pagination</h2>
      <div className="pagination">
        {pagination.map((page) => (
          <div className="pagination-item">{page}</div>
        ))}
      </div>
      {!postForDetailView && (
        <ManagePost
          addNewPost={addNewPost}
          selectedPost={selectedPost}
          editPost={editPost}
        />
      )}
      {postForDetailView && !selectedPost && (
        <DetailPost postId={postForDetailView} />
      )}
    </div>
  );
};

export default Posts;

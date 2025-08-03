import "./style.css";

export const Post = ({ post, deletePost }) => (
  <div className="posts-item" key={post.id}>
    {post.title}
    <button onClick={() => deletePost(post.id)}>Удалить</button>
  </div>
);

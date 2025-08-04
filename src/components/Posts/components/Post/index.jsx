import "./style.css";

export const Post = ({ post, deletePost, selectPost, showDetailPost }) => (
  <div className="posts-item" key={post.id}>
   <span onClick={() => selectPost(post)}>{post.title}</span>
    <button onClick={() => deletePost(post.id)}>Удалить</button>
    <button onClick={() => showDetailPost(post.id)}>Детальный просмотр</button>
  </div>
);

const Info = ({ post }) => (
  <div>
    <h2>dPost - {post.id}</h2>
    <br />
    <div>
      <b>Title</b> - {post.title}
    </div>
    <br />
    <div style={{ maxWidth: "200px" }}>
      <b>Text</b> - {post.body}
    </div>
    <br />
    <div>
      <b>User id</b> - {post.userId}
    </div>
  </div>
);

export default Info;

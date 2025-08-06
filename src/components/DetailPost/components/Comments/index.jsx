import React from "react";

const Comments = ({ comments }) => {
  return (
    <>
      <h2>Comments</h2>
      <div
        style={{ maxWidth: "200px", overflow: "scroll", maxHeight: "200px" }}
      >
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>Title - {comment.name}</div>
            <br />
            <div>Text - {comment.body}</div>
            <br />
            <div>User email - {comment.email}</div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;

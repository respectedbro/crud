import { useState } from "react";

const ManagePost = ({ addNewPost }) => {
  const [formValues, setFormValues] = useState({
    userId: 1,
    title: '',
    body: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post) => addNewPost(post));
  };

  const onChangeValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Форма для работы с постами</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Заголовок"
          value={formValues.title}
          onChange={onChangeValues}
        />
        <br />
        <br />
        <textarea
          name="body"
          cols="30"
          rows="10"
          value={formValues.body}
          onChange={onChangeValues}
        ></textarea>
<br/>
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default ManagePost;

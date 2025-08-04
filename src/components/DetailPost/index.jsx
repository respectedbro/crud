import {useEffect, useState} from 'react';

const DetailPost = ({postId}) => {
    const [post, setPost] = useState(null);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((post) => setPost(post));
    }, [postId]);


    return (
        <>
            {post && <div>
                <h2>dPost - {postId}</h2>
                <br/>
                <div><b>Title</b> - {post.title}</div>
                <br/>
                <div style={{maxWidth: '200px'}}><b>Text</b> - {post.body}</div>
                <br/>
                <div><b>User id</b> - {post.userId}</div>
            </div>}
        </>
    );


};

export default DetailPost;
import {useEffect, useState} from 'react';
import './style.css';
import ManagePost from '../ManagePost/index.jsx';
import {Post} from './components/Post/index.jsx';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const addNewPost = (post) => {
        setPosts([...posts, post]);
    };

    const selectPost = (post) => {
        setSelectedPost(post);
    };

    const deletePost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        }).then(() => {
            setPosts(posts.filter((item) => item.id !== postId));
        });
    };

    console.log(selectedPost);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => setPosts(posts));
    }, []);

    return (
        <div>
            <div className="posts">
                {
                    posts.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                                deletePost={deletePost}
                                selectPost={selectPost}
                            />
                        )
                    )
                }
            </div>
            <ManagePost addNewPost={addNewPost}/>
        </div>
    );
};

export default Posts;

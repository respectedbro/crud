import {useEffect, useState} from 'react';
import ManagePost from '../ManagePost/index.jsx';
import {Post} from './components/Post/index.jsx';
import './style.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

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

        setPosts(editedPosts)
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
            <ManagePost addNewPost={addNewPost} selectedPost={selectedPost}
            editPost={editPost}
            />
        </div>
    );
};

export default Posts;

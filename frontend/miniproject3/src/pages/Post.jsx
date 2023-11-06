import { useState, useEffect } from 'react';
import {useParams, Link, useNavigate } from 'react-router-dom'; //to get the ID

function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(res => res.json())
            .then(info => setPost(info.data))
    })

    function handleDelete() {
        fetch(`http://localhost:8080/api/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(info => {
            if (info.results === 200) {
                navigate('/posts');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <img src={post.image}/>
            <button onClick={handleDelete}>Delete Post</button>
            <div>
                <Link to="/posts/new">Create Post</Link>
                <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
                <Link to="/posts">Back to Posts</Link>
            </div>
        </>
    )
};

export default Post;
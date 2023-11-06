import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(res => res.json())
            .then(info => setPosts(info.data))
    }, []) //empty dependency array bc want it to only run once at the start of the call

    return (
        <div>
            <h1>All Posts</h1>
            {posts.length === 0 && <p>Loading...</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/posts/new">Create post</Link>
        </div>
    );
};

export default Posts;
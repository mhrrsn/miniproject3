import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
                image,
            }),
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
    };


    return (
        <>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit">Create Post</button>
            </form>
            <Link to="/posts">Back to Posts</Link>
        </>
    )
};

export default NewPost;
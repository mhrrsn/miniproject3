import { useState, useEffect } from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';


function EditPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const {id} = useParams();
    
    const navigate = useNavigate();

    //Need to make the initial get to call the data that we have so far before you even know what you have available to edit
    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(res => res.json())
            .then(info => {
                setTitle(info.data.title);
                setContent(info.data.content);
                setImage(info.data.image);
            })
    }, [id]) //contingency is ID so it will only make a change based on ID and set the title/content/image as the info available

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/api/posts/${id}`, {
            method: 'PUT',
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
                navigate('/posts/' + id);
            }
            console.log(info)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <h1>Edit Post</h1>
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
                <button type="submit">Update Post</button>
            </form>
            <Link to="/posts">Back to Posts</Link>
        </>
    )
};

export default EditPost;